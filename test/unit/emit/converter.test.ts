import { beforeEach, describe, expect, it, vi } from 'vitest';

import { emitConverterIndex } from '../../../lib/generator/emit/converter';
import { ServiceModel } from '../../../lib/generator/model';
import { changes, reset, virtualDirs, virtualFiles, written } from './fs-mock';
import { actions, serviceModel } from './model';

vi.mock('fs', async (importOriginal) =>
  (await import('./fs-mock')).mockFs(await importOriginal()),
);

const modelDir = 'lib/generated/model';
const outFile = 'docs/source/_static/policy-converter/services.json';

/**
 * Puts the models into the model directory, as `<n>.json` in the given order
 */
function models(...list: ServiceModel[]) {
  virtualDirs.set(modelDir, [
    ...list.map((_, index) => `${index}.json`),
    'README.md',
  ]);
  list.forEach((model, index) =>
    virtualFiles.set(`${modelDir}/${index}.json`, JSON.stringify(model)),
  );
}

function service(servicePrefix: string, className: string): ServiceModel {
  return serviceModel({
    servicePrefix,
    className,
    actions: [actions.get],
  });
}

describe('emitConverterIndex', () => {
  beforeEach(() => {
    reset();
    virtualFiles.set(
      'lib/generated/aws-service-principals/principals.json',
      JSON.stringify({
        'lambda.amazonaws.com': {},
        'old.amazonaws.com': { deprecated: 'Use new.amazonaws.com' },
        'ec2.amazonaws.com.cn': {},
      }),
    );
  });

  it('writes the classes and actions per prefix, and the service principals', () => {
    models(
      service('ses', 'SesPinpoint'),
      service('z', 'Z'),
      service('ses', 'SesMail'),
      serviceModel({ servicePrefix: 'a', className: 'A' }),
      service('ses', 'SesV2'),
      service('neptune-db', 'NeptuneDb'),
      service('ses', 'Ses'),
    );
    emitConverterIndex();

    expect(changes).toEqual(['mkdir docs/source/_static/policy-converter']);
    const text = written.get(outFile)!;
    expect(text.endsWith('}\n')).toBe(true);
    const index = JSON.parse(text) as {
      services: Record<string, Record<string, string[]>>;
      servicePrincipals: Record<string, string>;
    };
    // sorted by prefix, the class named after the prefix first, then by class
    expect(Object.keys(index.services)).toEqual([
      'a',
      'neptune-db',
      'ses',
      'z',
    ]);
    expect(Object.keys(index.services.ses)).toEqual([
      'Ses',
      'SesMail',
      'SesPinpoint',
      'SesV2',
    ]);
    expect(index.services.a).toEqual({
      A: ['GetThing', 'ListThings', 'DeleteThing'],
    });
    expect(index.services['neptune-db']).toEqual({ NeptuneDb: ['GetThing'] });
    expect(index.servicePrincipals).toEqual({
      'lambda.amazonaws.com': 'LAMBDA',
      'ec2.amazonaws.com.cn': 'EC2_AMAZONAWS_COM_CN',
    });
  });

  it('fails if the method of an action is not named after the action', () => {
    models(
      serviceModel({
        actions: [{ ...actions.get, methodName: 'toGetThings' }],
      }),
    );
    expect(() => emitConverterIndex()).toThrow(
      'Thing: method toGetThings of action GetThing is not toGetThing',
    );
    expect(written.size).toBe(0);
  });
});
