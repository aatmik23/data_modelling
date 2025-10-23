console.log(__dirname,__filename)

const fs= require('fs')

console.log("start")
fs.writeFile('harry.txt',"harry is a coder",(e,d)=>{
    console.log(d)
})
fs.readFile('harry.txt',(e,d)=>{
    console.log(d.toString())
})
console.log("end")
fs.appendFile('harry.txt',"i am no one",(e,d)=>{
    console.log("3rd")
})
