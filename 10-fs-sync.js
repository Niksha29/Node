const {readFileSync,writeFileSync} = require('fs')
console.log('start')
const first=readFileSync('./content/subfolder/first.txt','utf8')
const second=readFileSync('./content/subfolder/path.txt','utf8') 

writeFileSync('./content/result-sync.txt',`here is the result :${first}, ${second}`)

console.log('done with the task ')
console.log('starting the next one  ')