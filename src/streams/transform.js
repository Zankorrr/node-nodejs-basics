import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    console.log("Write your data and press 'Enter'\nPress 'ctrl+c' for exit")
    const myTransform = new Transform({
        transform(chunk, _encoding, callback) {
            callback(null, chunk.toString().split("").reverse().join(""))
        }
    });
    stdin.pipe(myTransform).pipe(stdout)
};

await transform();