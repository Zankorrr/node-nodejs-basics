import { Worker } from 'node:worker_threads'
import { cpus } from 'node:os';

const performCalculations = async () => {
    const cores = cpus()
    let number = 10

    const workerResults = await Promise.allSettled(cores.map(() => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(new URL('./worker.js', import.meta.url), {
                workerData: number++
            });
            worker.on('message', resolve)
            worker.on('error', reject)
        })
    }))

    const results = workerResults.map(({status, value}) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null
    }))

    console.log(results)
};

await performCalculations();