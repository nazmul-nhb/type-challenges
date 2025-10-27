// @ts-check

import { defineScriptConfig } from 'nhb-scripts';

export default defineScriptConfig({
    commit: {
        runFormatter: false,
    },
    lint: { folders: ["challenges"] },
    fix: { folders: ["challenges"], },
    count: {
        defaultPath: './challenges',
        excludePaths: ['node_modules'],
    },
});
