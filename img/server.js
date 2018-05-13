let http=require('http');
let fs=require('fs');
let url=require('url');

function read(cb) {
  fs.readFile('./book.json','utf8',function (err,data) {
    if(err||data.length===0){
      cb([])
    }else {
      cb(JSON.parse(data));
    }
  })
}
function write(data,cb){
fs.writeFile('./book.json',JSON.stringify(data),cb)
}


let sliders=require('./sliders');
http.createServer((req,res)=> {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length,    Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1');
  if (req.method === "OPTIONS") return res.end();
  /*让options请求快速返回*/

  let {pathname, query} = url.parse(req.url,true);

  if (pathname === '/sliders') {
  res.setHeader('Content-Type', 'application/json;charset=utf-8')
  return res.end(JSON.stringify(sliders))
  }
  if(pathname==='/hot'){
    read(function (books) {
      let hot=books.reverse().slice(0,6)
      res.setHeader('Content-Type', 'application/json;charset=utf8')
res.end(JSON.stringify(hot))
    });
    return
  }
  if(pathname==='/book'){//对书的增删改查
    let id=parseInt(query.id);//取出的是字符串
      switch(req.method){ //?id=1
        case 'GET':
          if(id){
            read(function (books) {
              let book=books.find(item=>item.bookId===id);
              if(!book)book={};
              res.setHeader('Content-Type', 'application/json;charset=utf-8');
              res.end(JSON.stringify(book))

            })
          }else{//获取所有图书
            read(function (books) {
              res.setHeader('Content-Type', 'application/json;charset=utf-8');
              res.end(JSON.stringify(books.reverse()))
            })
          }
          break;
        case 'POST':
          let str={};
          req.on('data',function (chunk) {
              str+=chunk
          });
          req.on('end',function () {
              let book=JSON.parse(str);
            read(function (books) {
              book.bookId=books.length?books[books.length-1].bookId+1:1;
              books.push(book);
              write(books,function () {
                res.end(JSON.stringify(book))

              })
            })
          });
          break;
        case 'PUT':
          if(id){
            let str='';
            req.on('data',chunk=>{
              str+=chunk;
            });
            req.on('end',()=>{
              let book=JSON.parse(str);//book要改成什么样子
              read(function (books) {
                books = books.map(item => {
                  if (item.bookId === id) {
                    return book
                  }
                  return item
                })
                write(books,function(){//将数据写回数据中
                  res.end(JSON.stringify(book))
                })
              })
            })
          }
          break;
        case 'DELETE':
          // console.log(id);
          read(function (books) {
            books=books.filter(item=>item.bookId!==id);
            write(books,()=>res.end(JSON.stringify({})))//删除返回空对象
            // console.log(books);
            // res.end(JSON.stringify(books.reverse()))
          });
          break;

      }
      return
  }

  }
).listen(3001);
