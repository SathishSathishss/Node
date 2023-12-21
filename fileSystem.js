// const fs = require('fs');

// fs.writeFile("./file.text","welcom to node",(err)=>{
//     if(err) throw err;
//     console.log('writeFile works');
// });

// fs.readFile("./file.text",(err,data)=>{
//     if (err) throw err;
//     console.log(data.toString());
// });

// fs.appendFile("./file.text","Append file add",(err)=>{
//     if(err) throw err;
//     console.log("Appendent file works")
// });

// fs.unlink("./file.text",(err)=>{
//     if(err) throw err;
//     console.log("File Delete");
// });

// const http = require('http');

// const host = '127.0.0.1';
// const port = 2000;

// const server = http.createServer((req,res)=>{
// res.statusCode = 200;
// res.setHeader('Content-Type','text/plain');
// res.end('thi is a test of node');
// });

// const str = 'Node.js is running at http://'+host+':'+port+'/.'
// Server.listen(port,host,()=>{
//     console.log(str);
// });

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//   res.write('<input type="file" name="filetoupload"><br>');
//   res.write('<input type="submit">');
//   res.write('</form>');
//   return res.end();
// }).listen(8080); 
