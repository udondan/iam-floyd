import 'colors';

import * as cheerio from 'cheerio';

import { ResourceTypes } from '../shared';
import { Conditions } from './condition';
import { arnFixer, conditionFixer, conditionKeyFixer } from './fixes';
import type { Actions, Module } from './index';

type Cell = ReturnType<typeof getTables>[number];

function cleanDescription(description: string): string {
  return description
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/<code>(.*?)<\/code>/g, '`$1`')
    .trim();
}

function validateUrl(url: string | undefined) {
  if (typeof url == 'undefined') {
    return '';
  }

  if (!URL.canParse(url)) {
    console.warn(`Removed invalid URL ${url}`.red);
    return '';
  }

  return url;
}

function getTable($: cheerio.CheerioAPI, title: string) {
  return getTables($, title)[0] ?? $(undefined);
}

// Some services (e.g. S3) split their actions across multiple tables: the
// main actions table plus a separate "permission-only actions" table. Both
// tables share the same `<th>Actions</th>` header, so all of them need to be
// collected and merged, not just the first match.
function getTables($: cheerio.CheerioAPI, title: string) {
  return $('.table-container table')
    .toArray()
    .filter((element) => {
      return $(element).find('th').first().text() == title;
    })
    .map((element) => $(element));
}

/**
 * Adds the action of the first row of an action, returns its name
 */
function addAction(actions: Actions, first: Cell): string {
  // column order: action, description, resource type, condition keys, access level
  const action = first
    .text()
    .replace('[permission only]', '')
    .replace(/-/g, '')
    .trim();
  actions[action] = {
    url: validateUrl(first.find('a[href]').attr('href')?.trim()),
    description: cleanDescription(first.next().text().trim()),
    accessLevel: first.next().next().next().next().text().trim(),
  };
  return action;
}

/**
 * The documented condition keys of a row, which are related to the action
 */
function rowConditions(
  $: cheerio.CheerioAPI,
  module: Module,
  conditionKeys: Cell,
  action: string,
): string[] {
  const conditions: string[] = [];
  conditionKeys.each((_, conditionKey) => {
    const condition = conditionKeyFixer(
      module.servicePrefix!,
      cleanDescription($(conditionKey).text()),
    );

    if (!module.conditions![condition]) {
      console.log(
        `[Skipping referenced condition, since it is not documented: ${condition}]`
          .red,
      );
      return;
    }

    conditions.push(condition);
    (module.conditions![condition].relatedActions ??= []).push(action);
  });
  return conditions;
}

/**
 * Adds the resource type and the condition keys of a row to the action. The conditions of a row
 * without resource type are those of the action.
 */
function addResourceTypeOfAction(
  actions: Actions,
  action: string,
  resourceType: string,
  conditions: string[],
) {
  if (!resourceType.length) {
    if (conditions.length) {
      actions[action].conditions = conditions;
    }
    return;
  }
  const required = resourceType.includes('*');
  const name = required ? resourceType.slice(0, -1) : resourceType;
  const resourceTypes = (actions[action].resourceTypes ??= {});
  resourceTypes[name] = { required };
  if (conditions.length) {
    resourceTypes[name].conditions = conditions;
  }
}

/**
 * Warns about a row that is neither an action nor a resource type of an action, unless it is
 * empty or a scenario
 */
function skipRow(tds: Cell) {
  const content = cleanDescription(tds.text());
  if (content.length && !content.startsWith('SCENARIO:')) {
    console.warn(
      `skipping row due to unexpected number of fields: ${content}`.yellow,
    );
  }
}

export function addActions($: cheerio.CheerioAPI, module: Module) {
  const actions: Actions = {};

  // a row with 5 fields starts an action, the following rows with 2 fields add resource types
  let action: string;
  for (const tableActions of getTables($, 'Actions')) {
    tableActions.find('tr').each((_, element) => {
      const tds = $(element).find('td');
      let first = tds.first();
      if (tds.length == 5) {
        action = addAction(actions, first);
        first = first.next().next();
      } else if (tds.length != 2) {
        skipRow(tds);
        return;
      }
      addResourceTypeOfAction(
        actions,
        action,
        first.text().trim(),
        rowConditions($, module, first.next().find('p'), action),
      );
    });
  }
  module.actionList = actions;
}

export function addResourceTypes($: cheerio.CheerioAPI, module: Module) {
  const resourceTypes: ResourceTypes = {};
  const tableResourceTypes = getTable($, 'Resource types');
  tableResourceTypes.find('tr').each((_, element) => {
    const tds = $(element).find('td');
    const name = tds.first().text().trim();
    const url = validateUrl(tds.first().find('a[href]').attr('href')?.trim());
    const arn = tds.first().next().text().trim();
    if (!name.length && !arn.length) {
      return;
    }

    const conditionKeys = tds
      .first()
      .next()
      .next()
      .find('p')
      .toArray()
      .map((element) => {
        return conditionKeyFixer(
          module.servicePrefix!,
          $(element).text().trim(),
        );
      });

    conditionKeys.forEach((condition: string) => {
      (module.conditions![condition].relatedResourceTypes ??= []).push(name);
    });

    if (name.length) {
      resourceTypes[name] = {
        name: name,
        url: url,
        arn: arnFixer(module.servicePrefix!, name, arn),
        conditionKeys: conditionKeys,
      };
    }
  });
  module.resourceTypes = resourceTypes;
}

export function addConditions($: cheerio.CheerioAPI, module: Module) {
  const conditions: Conditions = {};
  const table = getTable($, 'Condition keys');
  table.find('tr').each((_, element) => {
    const tds = $(element).find('td');
    const key = tds.first().text().trim();
    const url = validateUrl(tds.first().find('a[href]').attr('href')?.trim());
    const description = cleanDescription(tds.first().next().text());
    const type = tds.first().next().next().text().trim();

    if (key.length) {
      const condition = conditionFixer(module.servicePrefix!, {
        key: key,
        description: description,
        type: type,
        url: url,
        isGlobal: key.startsWith('aws:'),
      });

      conditions[condition.key] = condition;
    }
  });
  module.conditions = conditions;
}
