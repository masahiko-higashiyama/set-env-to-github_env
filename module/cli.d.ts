import meow from "meow";
export declare const cli: meow.Result<{}>;
export declare const run: (
    _input?: string[],
    _flags?: meow.TypedFlags<{}> & Record<string, unknown>
) => Promise<{
    exitStatus: number;
    stdout: string | null;
    stderr: Error | null;
}>;
