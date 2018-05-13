// getList  获取排行页列表
// otheruser 获取他人详情页
// markToday  创建聚会信息

// getFilmList  获取电影列表
// getFoodList  获取美食列表
// getFriendList 获取朋友圈列表
// publishInfo  发布朋友圈

// getCityList 获取城市列表

let http = require('http')
let fs = require('fs')
let url = require('url')
// console.log(1)

http.createServer(function (req, res) {
    // console.log(2)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.setHeader('X-Powered-By', ' 3.2.1')
    if (req.method == 'OPTIONS') return res.end()
    let {
      pathname,
      query
    } = url.parse(req.url, true)

    // 获取排行页列表
    if (pathname === '/getList') {
      fs.readFile('./list.json', 'utf8', function (err, data) {
        res.setHeader('content-type', 'application/json;charset=utf-8')
        data = JSON.parse(data)
        return res.end(JSON.stringify(data))
      })
    }

    // writeComment 写评论
    if (pathname === '/writeComment') {
      let id = parseInt(query.id);
      // console.log(id);
      let str = '';
      req.on('data', function (chunk) {
        str += chunk;
        // console.log(typeof JSON.parse(str));
      });
      req.on('end', function () {
        let newComment = JSON.parse(str);
        console.log(newComment);
        fs.readFile('./list.json', 'utf8', function (err, data) {
          data = JSON.parse(data);
          data = data.map(item => {
            if (item.messageId === id) {
              newComment.commentId = item.userComment.length + 1;
              item.userComment.push(newComment);
            }
            return item;
          })
          fs.writeFile('./list.json',JSON.stringify(data),function(){
            res.end(JSON.stringify(newComment))
          })

        })

      });

    }
    // 获取他人详情页
    if (pathname === '/otheruser') {
      let id = query.id
      fs.readFile('./list.json', 'utf8', function (err, data) {
        data = JSON.parse(data).filter(item => item.userId == id)
        return res.end(JSON.stringify(data[0]))
      })
    }

    // 创建聚会信息
    if (pathname === '/markToday') {
      let str = ''
      req.on('data', function (chunk) {
        str += chunk
      })
      req.on('end', function () {
        let newMess = JSON.parse(str)
        fs.readFile('./list.json', 'utf8', function (err, data) {
          let origin = JSON.parse(data)
          newMess.userId = origin.length === 0 ? 1 : origin[origin.length - 1].userId + 1
          origin.push(newMess)
          fs.writeFile('./list.json', JSON.stringify(origin), function (err, data) {
            return res.end()
          })
        })
      })
    }

    // getFilmList  获取电影列表
    if (pathname === '/getFilmList') {
      // 获取整个电影列表
      fs.readFile('./film.json', 'utf8', function (err, data) {
        res.setHeader('content-type', 'application/json;charset=utf-8')
        return res.end(JSON.stringify(data))
      })
    }

    // // 获取某个电影详情
    // if (pathname === '/getOneFilm') {
    //   let id = query.id;
    //   fs.readFile('./film.json', 'utf8', function (err, data) {
    //     res.setHeader('content-type', 'application/json;charset=utf-8')
    //     data = JSON.parse(data).filter(item => item.filmId === id);
    //     return res.end(JSON.stringify(data))
    //   })
    // }

    // getFoodList  获取美食列表
    if (pathname === '/getFoodList') {
      // 获取整个餐厅数据
      fs.readFile('./food.json', 'utf8', function (err, data) {
        res.setHeader('content-type', 'application/json;charset=utf-8')
        return res.end(JSON.stringify(data))
      })
    }

    // 获取城市列表
    if (pathname === '/getCityList') {
      fs.readFile('./city.json', 'utf8', function (err, data) {
        res.setHeader('content-type', 'application/json;charset=utf-8')
        return res.end(JSON.stringify(data))
      })
    }


    // 获取朋友圈列表
    if (pathname === '/getFriendList') {
      fs.readFile('./circle.json', 'utf8', function (err, data) {
        res.setHeader('content-type', 'application/json;charset=utf-8')
        data = JSON.parse(data)
        return res.end(JSON.stringify(data))
      })
    }
  }
).listen(8088, function () {
  console.log('启动成功！！！')
});
