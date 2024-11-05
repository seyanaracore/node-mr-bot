const glob = require('glob')
const fs = require("fs");

glob.sync('dist/**/*{.js,.d.ts}').forEach(file => {
    if (file.endsWith('.js')) {
        fs.rename(file, file.replace('.js', '.mjs'), (err) => {
            if (err) throw err;
        })
    } else {
        fs.rename(file, file.replace('.d.ts', '.d.mts'), (err) => {
            if (err) throw err;
        })
    }
})
