const parseArgs = () => {
    const args = process.argv.reduce((acc, val, index, arr) => {
        if(val.startsWith('--')) {
            const pair = `${val.slice(2)} is ${arr[index+1]}`
            acc.push(pair)
        }
        return acc
    }, [])
    console.log(args.join(", "))
};

parseArgs();