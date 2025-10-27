// @ts-check

import { defineScriptConfig } from 'nhb-scripts';

export default defineScriptConfig({
	commit: {
		runFormatter: true,
		emojiBeforePrefix: true,
	},
	format: {
		files: ['challenges', 'nhb.scripts.config.mjs'],
	},
	lint: { folders: ['challenges'] },
	fix: { folders: ['challenges'] },
	count: {
		defaultPath: './challenges',
		excludePaths: ['node_modules'],
	},
});
