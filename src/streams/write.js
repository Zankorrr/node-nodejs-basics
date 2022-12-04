import { createWriteStream } from 'node:fs'
import { stdin } from 'node:process';

const write = async () => {
    console.log("Write your data\nPress 'Enter' for safe the line\nPress 'ctrl+c' for exit")
    const writeStream = createWriteStream(new URL('./files/fileToWrite.txt', import.meta.url))
    stdin.pipe(writeStream)
};

await write();