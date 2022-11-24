export function convert(content) {
    var ENV_PATTERN = [
        /echo\s+(["'])?::set-env name=(?<name>\${?.+}?|.+)::(?<variableName>\${?.+}?|.+)\1/g,
        'echo "$<name>=$<variableName>" >> $GITHUB_ENV'
    ];
    var SAVE_PATTERN = [
        /echo\s+(["'])?::set-state name=(?<name>\${?.+}?|.+)::(?<variableName>\${?.+}?|.+)\1/g,
        'echo "$<name>=$<variableName>" >> $GITHUB_STATE'
    ];
    var OUTPUT_PATTERN = [
        /echo\s+(["'])?::set-output name=(?<name>\${?.+}?|.+)::(?<variableName>\${?.+}?|.+)\1/g,
        'echo "$<name>=$<variableName>" >> $GITHUB_OUTPUT'
    ];
    return [ENV_PATTERN, SAVE_PATTERN, OUTPUT_PATTERN].reduce(function (output, _a) {
        var pattern = _a[0],
            replacement = _a[1];
        return output.replace(pattern, replacement);
    }, content);
}
//# sourceMappingURL=set-env-to-github_env.js.map
