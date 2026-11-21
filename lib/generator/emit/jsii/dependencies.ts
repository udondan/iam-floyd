import * as fs from 'fs';
import * as path from 'path';
import { gunzipSync } from 'zlib';

export interface DependencyConfiguration {
  targets?: Record<string, unknown>;
  submodules?: Record<string, { targets?: Record<string, unknown> }>;
}

/**
 * A jsii assembly of an installed package
 */
interface InstalledAssembly {
  name: string;
  targets?: Record<string, unknown>;
  submodules?: Record<string, { targets?: Record<string, unknown> }>;
  dependencies?: Record<string, string>;
}

/**
 * Loads a jsii assembly from an installed package, following `.jsii.gz` redirects
 */
function loadInstalledAssembly(pkg: string): InstalledAssembly {
  const dir = path.dirname(require.resolve(`${pkg}/package.json`));
  const file = path.join(dir, '.jsii');
  const content = JSON.parse(fs.readFileSync(file, 'utf8')) as
    | InstalledAssembly
    | { schema: 'jsii/file-redirect'; filename: string; compression?: string };
  if ('schema' in content && content.schema == 'jsii/file-redirect') {
    const buffer = fs.readFileSync(path.join(dir, content.filename));
    return JSON.parse(
      (content.compression == 'gzip' ? gunzipSync(buffer) : buffer).toString(
        'utf8',
      ),
    ) as InstalledAssembly;
  }
  return content as InstalledAssembly;
}

/**
 * The targets of an assembly and of its submodules
 */
function configuration(assembly: InstalledAssembly): DependencyConfiguration {
  const submodules: Record<string, { targets?: Record<string, unknown> }> = {};
  for (const [fqn, submodule] of Object.entries(assembly.submodules ?? {})) {
    if (submodule.targets) submodules[fqn] = { targets: submodule.targets };
  }
  return {
    ...(assembly.targets ? { targets: assembly.targets } : {}),
    ...(Object.keys(submodules).length ? { submodules } : {}),
  };
}

/**
 * Collects the targets of all jsii dependencies, transitively, like jsii does
 */
export function dependencyClosure(
  dependencies: string[],
): Record<string, DependencyConfiguration> {
  const closure: Record<string, DependencyConfiguration> = {};
  const queue = [...dependencies];
  while (queue.length) {
    const pkg = queue.shift()!;
    if (closure[pkg]) continue;
    const assembly = loadInstalledAssembly(pkg);
    closure[pkg] = configuration(assembly);
    queue.push(...Object.keys(assembly.dependencies ?? {}));
  }
  return closure;
}
