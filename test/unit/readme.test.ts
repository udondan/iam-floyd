import * as fs from 'fs';
import { describe, expect, it } from 'vitest';

import {
  Language,
  languages,
  packages,
  readme,
} from '../../lib/generator/readme';

const examples: Record<Language, string> = {
  typescript: "import { Statement } from 'iam-floyd';",
  python: 'import iam_floyd as statement',
  java: 'import com.udondan.iamFloyd.statement.Ec2;',
  dotnet: 'using IAM.Floyd.Statement;',
  go: [
    'import (',
    '\t"udondan.github.io/iam-floyd/go/iamfloyd"',
    '\t"udondan.github.io/iam-floyd/go/iamfloyd/statement"',
    ')',
    'x := iamfloyd.String("a")',
  ].join('\n'),
};

function example(language: string, content: string): string {
  return `<!-- language: ${language} -->\n${content}\n<!-- /language -->`;
}

function markdown(
  options: {
    order?: string[];
    extra?: string;
    install?: string;
  } = {},
): string {
  const order = options.order ?? [...languages];
  const parts = order.map((language, index) =>
    index === 0
      ? example(language, examples[language as Language] ?? 'x')
      : example(
          language,
          `<details>\n<summary>${language}</summary>\n\n${examples[language as Language] ?? 'x'}\n\n</details>`,
        ),
  );
  return [
    '# IAM Floyd',
    '',
    ...parts,
    options.extra ?? '',
    '',
    '## Installation',
    '',
    options.install ??
      '<!-- install -->\n```bash\nnpm install iam-floyd\n```\n<!-- /install -->',
    '',
    'The end',
    '',
  ].join('\n');
}

describe('readme', () => {
  it('writes the TypeScript README of iam-floyd', () => {
    expect(readme(markdown(), 'typescript', 'iam-floyd', '1.2.3')).toBe(
      [
        '# IAM Floyd',
        '',
        examples.typescript,
        '',
        '## Installation',
        '',
        '```bash\nnpm install iam-floyd\n```',
        '',
        'The end',
        '',
      ].join('\n'),
    );
  });

  it('replaces the example with the one of the language, without details', () => {
    const result = readme(markdown(), 'python', 'iam-floyd', '1.2.3');
    expect(result).toContain('# IAM Floyd\n\nimport iam_floyd as statement\n');
    expect(result).not.toContain('<details>');
    expect(result).not.toContain('<summary>');
    expect(result).not.toContain('import com.udondan');
    expect(result).toContain('```bash\npip install iam-floyd\n```');
  });

  it.each([
    ['typescript', "import { Statement } from 'cdk-iam-floyd';"],
    ['python', 'import cdk_iam_floyd as statement'],
    ['java', 'import com.udondan.iamFloyd.cdk.statement.Ec2;'],
    ['dotnet', 'using CDK.IAM.Floyd.Statement;'],
    [
      'go',
      [
        'import (',
        '\t"github.com/aws/jsii-runtime-go"',
        '\t"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"',
        ')',
        'x := jsii.String("a")',
      ].join('\n'),
    ],
  ] as const)(
    'renames the imports in %s for cdk-iam-floyd',
    (language, code) => {
      expect(readme(markdown(), language, 'cdk-iam-floyd', '1.2.3')).toContain(
        `# IAM Floyd\n\n${code}\n`,
      );
    },
  );

  it.each([
    ['typescript', 'iam-floyd', '```bash\nnpm install iam-floyd\n```'],
    ['typescript', 'cdk-iam-floyd', '```bash\nnpm install cdk-iam-floyd\n```'],
    ['python', 'cdk-iam-floyd', '```bash\npip install cdk-iam-floyd\n```'],
    [
      'java',
      'iam-floyd',
      '```xml\n<dependency>\n  <groupId>com.udondan</groupId>\n  <artifactId>iam-floyd</artifactId>\n  <version>1.2.3</version>\n</dependency>\n```',
    ],
    ['dotnet', 'iam-floyd', '```bash\ndotnet add package IAM.Floyd\n```'],
    [
      'dotnet',
      'cdk-iam-floyd',
      '```bash\ndotnet add package CDK.IAM.Floyd\n```',
    ],
    [
      'go',
      'iam-floyd',
      '```bash\ngo get udondan.github.io/iam-floyd/go/iamfloyd\n```',
    ],
    [
      'go',
      'cdk-iam-floyd',
      '```bash\ngo get udondan.github.io/iam-floyd/go/cdkiamfloyd\n```',
    ],
  ] as const)('writes the installation in %s of %s', (language, pkg, text) => {
    expect(readme(markdown(), language, pkg, '1.2.3')).toContain(
      `## Installation\n\n${text}\n\nThe end\n`,
    );
  });

  it('fails on an unknown language', () => {
    expect(() =>
      readme(
        markdown({ order: [...languages, 'cobol'] }),
        'python',
        'iam-floyd',
        '1',
      ),
    ).toThrow('README.md: unknown language cobol');
  });

  it('fails on two examples in a language', () => {
    expect(() =>
      readme(
        markdown({ order: [...languages, 'java'] }),
        'python',
        'iam-floyd',
        '1',
      ),
    ).toThrow('README.md: two examples in java');
  });

  it('fails if the first example is not TypeScript', () => {
    expect(() =>
      readme(
        markdown({ order: ['python', 'typescript', 'java', 'dotnet', 'go'] }),
        'python',
        'iam-floyd',
        '1',
      ),
    ).toThrow('README.md: the first example must be TypeScript');
  });

  it('fails without examples', () => {
    expect(() =>
      readme(markdown({ order: [] }), 'python', 'iam-floyd', '1'),
    ).toThrow('README.md: the first example must be TypeScript');
  });

  it('fails if a language has no example', () => {
    expect(() =>
      readme(
        markdown({ order: ['typescript', 'python', 'java', 'go'] }),
        'python',
        'iam-floyd',
        '1',
      ),
    ).toThrow('README.md: no example in dotnet');
  });

  it('fails without installation', () => {
    expect(() =>
      readme(markdown({ install: 'none' }), 'python', 'iam-floyd', '1'),
    ).toThrow('README.md: unbalanced language or install markers');
  });

  it('fails on two installations', () => {
    const install =
      '<!-- install -->\nnpm\n<!-- /install -->\n\n<!-- install -->\npip\n<!-- /install -->';
    expect(() =>
      readme(markdown({ install }), 'python', 'iam-floyd', '1'),
    ).toThrow('README.md: unbalanced language or install markers');
  });

  it('fails on an unclosed install marker', () => {
    expect(() =>
      readme(
        markdown({ install: '<!-- install -->\nnpm' }),
        'python',
        'iam-floyd',
        '1',
      ),
    ).toThrow('README.md: unbalanced language or install markers');
  });

  it('fails on a language marker that is not closed', () => {
    expect(() =>
      readme(
        markdown({ extra: '<!-- language: python -->\nfoo' }),
        'python',
        'iam-floyd',
        '1',
      ),
    ).toThrow('README.md: unbalanced language or install markers');
  });

  it('writes every package and language from README.md', () => {
    const text = fs.readFileSync('README.md', 'utf8');
    for (const pkg of packages) {
      for (const language of languages) {
        const result = readme(text, language, pkg, '1.2.3');
        expect(result).not.toMatch(/<!-- \/?(language|install|example)\b/);
        expect(result.endsWith('\n')).toBe(true);
      }
    }
  });
});
