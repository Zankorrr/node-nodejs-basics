import { createReadStream } from 'node:fs'
import { stdout } from 'node:process';

const read = async () => {
    createReadStream(new URL('./files/fileToRead.txt', import.meta.url)).pipe(stdout)
};

await read();