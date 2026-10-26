/**
 * Writes the README of a package from the README of the repository, which has the examples of all
 * languages: only the example of the language of the package, in place of the TypeScript example,
 * without the `<details>` around it, which registries like PyPI, NuGet and pkg.go.dev don't render,
 * and the installation of that package.
 *
 * The parts are marked in README.md with comments, which GitHub doesn't show:
 *
 * - `<!-- language: <language> -->` … `<!-- /language -->` around the example of each language,
 *   the first one is TypeScript
 * - `<!-- install -->` … `<!-- /install -->` around the installation of all packages
 */

export const languages = [
  'typescript',
  'python',
  'java',
  'dotnet',
  'go',
] as const;

export type Language = (typeof languages)[number];

export const packages = ['iam-floyd', 'cdk-iam-floyd'] as const;

export type Package = (typeof packages)[number];

/**
 * The names of the standalone package in the examples, and those of `cdk-iam-floyd`
 */
const cdkNames: Record<Language, [RegExp, string][]> = {
  typescript: [[/'iam-floyd'/g, "'cdk-iam-floyd'"]],
  python: [[/\biam_floyd\b/g, 'cdk_iam_floyd']],
  java: [[/\bcom\.udondan\.iamFloyd\./g, 'com.udondan.iamFloyd.cdk.']],
  dotnet: [[/\bIAM\.Floyd\b/g, 'CDK.IAM.Floyd']],
  go: [
    [
      /"udondan\.github\.io\/iam-floyd\/go\/iamfloyd"/g,
      '"github.com/aws/jsii-runtime-go"',
    ],
    [
      /\budondan\.github\.io\/iam-floyd\/go\/iamfloyd\//g,
      'udondan.github.io/iam-floyd/go/cdkiamfloyd/',
    ],
    [/\biamfloyd\.String\(/g, 'jsii.String('],
  ],
};

function install(language: Language, pkg: Package, version: string): string {
  const cdk = pkg === 'cdk-iam-floyd';
  switch (language) {
    case 'typescript':
      return `\`\`\`bash\nnpm install ${pkg}\n\`\`\``;
    case 'python':
      return `\`\`\`bash\npip install ${pkg}\n\`\`\``;
    case 'java':
      return [
        '```xml',
        '<dependency>',
        '  <groupId>com.udondan</groupId>',
        `  <artifactId>${pkg}</artifactId>`,
        `  <version>${version}</version>`,
        '</dependency>',
        '```',
      ].join('\n');
    case 'dotnet':
      return `\`\`\`bash\ndotnet add package ${cdk ? 'CDK.IAM.Floyd' : 'IAM.Floyd'}\n\`\`\``;
    case 'go':
      return `\`\`\`bash\ngo get udondan.github.io/iam-floyd/go/${cdk ? 'cdkiamfloyd' : 'iamfloyd'}\n\`\`\``;
  }
}

/**
 * Returns `markdown` (README.md) for the package `pkg` in `language`
 */
export function readme(
  markdown: string,
  language: Language,
  pkg: Package,
  version: string,
): string {
  const examples: Partial<Record<Language, string>> = {};
  let first: Language | undefined;
  let result = markdown.replace(
    /^<!-- language: (\S+) -->\n([\s\S]*?)^<!-- \/language -->$/gm,
    (_match, name: string, content: string) => {
      if (!(languages as readonly string[]).includes(name))
        throw new Error(`README.md: unknown language ${name}`);
      if (examples[name as Language] !== undefined)
        throw new Error(`README.md: two examples in ${name}`);
      first ??= name as Language;
      examples[name as Language] = content
        .replace(/^<\/?details>$|^<summary>.*<\/summary>$/gm, '')
        .trim();
      return name === first ? '<!-- example -->' : '';
    },
  );
  if (first !== 'typescript')
    throw new Error('README.md: the first example must be TypeScript');
  for (const name of languages) {
    if (examples[name] === undefined)
      throw new Error(`README.md: no example in ${name}`);
  }

  let example = examples[language] ?? '';
  if (pkg === 'cdk-iam-floyd') {
    for (const [pattern, replacement] of cdkNames[language])
      example = example.replace(pattern, replacement);
  }
  result = result.replace('<!-- example -->', () => example);

  const installs = result.match(/^<!-- install -->$/gm)?.length ?? 0;
  result = result.replace(
    /^<!-- install -->\n[\s\S]*?^<!-- \/install -->$/m,
    () => install(language, pkg, version),
  );
  if (installs !== 1 || /<!-- \/?(language|install)\b/.test(result))
    throw new Error('README.md: unbalanced language or install markers');

  return `${result.replace(/\n{3,}/g, '\n\n').trim()}\n`;
}
