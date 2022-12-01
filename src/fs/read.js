import { readFile } from "node:fs/promises";
import path from "node:path";

const read = async () => {
    try {
        const filePath = new URL(path.join('files', 'fileToRead.txt'), import.meta.url)
        const contents = await readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
    } catch(err) {
        const error = new Error('FS operation failed')
        console.log(error)
    }
};

await read();