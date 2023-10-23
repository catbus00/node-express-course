const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 200 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./01-node-tutorial/content/big.txt', { encoding: 'utf8', highWaterMark: 200 });

let counter = 0;

stream.on('data', (result) => {
    counter++;
    console.log(result)
})

stream.on('end', () => {
    console.log(`Number of chunks ${counter}`)
})

stream.on('error', (err) => console.log(err))
