/**
 * The fields of package.json the build scripts use
 */
export interface PackageJson {
  name: string;
  version: string;
  description: string;
  keywords: string[];
  license: string;
  homepage: string;
  repository?: { url?: string };
  author: { name: string; url?: string };
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  jsii?: { outdir?: string; targets?: Record<string, unknown> };
}
