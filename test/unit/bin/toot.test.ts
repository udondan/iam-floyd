import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const { send } = vi.hoisted(() => ({
  send: vi.fn<(command: { input: unknown }) => Promise<unknown>>(),
}));

vi.mock('@aws-sdk/client-sqs', () => ({
  SQSClient: class {
    send = send;
  },
  SendMessageCommand: class {
    constructor(public input: unknown) {}
  },
}));

let dir: string;

async function run(notes: string) {
  const file = path.join(dir, 'notes.md');
  fs.writeFileSync(file, notes);
  vi.stubEnv('RELEASE_NOTES', file);
  vi.stubEnv('AWS_SQS_URL', 'https://sqs/queue');
  vi.resetModules();
  await import('../../../bin/toot');
}

function toots(): string[] {
  return send.mock.calls.map(
    ([command]) => (command.input as { MessageBody: string }).MessageBody,
  );
}

describe('bin/toot', () => {
  beforeEach(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), 'toot-'));
    vi.spyOn(console, 'log').mockReturnValue();
  });

  afterEach(() => {
    fs.rmSync(dir, { recursive: true });
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
    send.mockReset();
  });

  it('toots each section of the release notes', async () => {
    send.mockResolvedValue({ MessageId: '1' });
    await run(
      [
        '## 1.2.3',
        '',
        '---',
        '**Features**',
        '',
        '* new things',
        '',
        ':warning: **Breaking**',
        '',
        '* removed things',
        '',
      ].join('\n'),
    );
    await vi.waitFor(() => expect(send).toHaveBeenCalledTimes(2));
    expect(toots()).toEqual([
      'Features\n\n* new things',
      '⚠️ Breaking\n\n* removed things',
    ]);
    expect(send.mock.calls[0][0].input).toEqual({
      MessageBody: 'Features\n\n* new things',
      QueueUrl: 'https://sqs/queue',
      MessageGroupId: 'Default',
    });
    await vi.waitFor(() =>
      expect(console.log).toHaveBeenLastCalledWith('--------------'),
    );
  });

  it('splits long sections into toots with the headline', async () => {
    send.mockResolvedValue({});
    const lines = Array.from(
      { length: 12 },
      (_, i) => `* ${String(i).padStart(2, '0')} ${'x'.repeat(50)}`,
    );
    await run(['**Updates**', '', ...lines, ''].join('\n'));
    await vi.waitFor(() => expect(send).toHaveBeenCalledTimes(2));
    const [first, second] = toots();
    expect(first).toBe(`Updates\n\n${lines.slice(0, 8).join('\n')}`);
    expect(second).toBe(`Updates\n\n${lines.slice(8).join('\n')}`);
    expect(first.length).toBeLessThanOrEqual(500);
  });

  it('toots nothing of a long section without lines', async () => {
    send.mockResolvedValue({});
    await run(`**${'x'.repeat(600)}**`);
    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(send).not.toHaveBeenCalled();
  });

  it('exits with 1 if the toot fails', async () => {
    const error = new Error('queue not found');
    send.mockRejectedValue(error);
    const exit = vi.spyOn(process, 'exit').mockReturnValue(undefined as never);
    const log = vi.spyOn(console, 'error').mockReturnValue();
    await run('**Fixes**\n\n* a fix\n');
    await vi.waitFor(() => expect(exit).toHaveBeenCalledWith(1));
    expect(log).toHaveBeenCalledWith(error);
  });
});
