const http = require("http")
const port = 4000

const app = http.createServer((req, res)=>{
  console.log("Hello")
})

app.listen(port, ()=>{
  console.log('Ready to Launch...')
})