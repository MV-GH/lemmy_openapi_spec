// Combines all separate types files into one,
// since our TS -> OpenAPI converter seems to lack multiple files as source capability

import {readdir, readFile, writeFile} from "fs"

const targetFile = "partials/auto_gen_types.ts"
const subPath = "./lemmy-js-client/src/types/"

const header = `
// noinspection JSUnusedGlobalSymbols

`.trimStart()
readdir(subPath, (err, files) => {
    if (err)
        console.log(err)
    else {
        const promises: Promise<string>[] = files.map(filePath => {
            return new Promise((resolve, reject) => {
                readFile(subPath + filePath, 'utf8', (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data.substring(data.indexOf("export")) // remove the import statements
                            .replace(/: number/g, ": bigint")
                            .replace(/= number/g, "= bigint")
                        );
                    }
                });
            });
        });

        Promise.all(promises)
            .then(contents => {
                const combinedContent = header + contents.join('\n\n')

                // Write the combined content to the destination file
                writeFile(targetFile, combinedContent, 'utf8', err => {
                    if (err) {
                        console.error('Error writing to destination file:', err);
                    } else {
                        console.log(`TS types combined and written to ${targetFile}.`);
                    }
                });
            })
            .catch(err => {
                console.error('Error reading source files:', err);
            });
    }
})