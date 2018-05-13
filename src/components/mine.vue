<template>
  <div class="mine">

    <div class="mine-top">
      <img class="userBg" src="../../img/3.jpg" alt="">
      <img class="userPic" src="../../img/3.jpg" alt="">
      <span class="userName">肉肉</span>
      <i class="iconfont icon-xiangji"></i>
      <span class="middleBot middleBot-left">上传真实头像魅力值+10</span>
    </div>
    <div class="mine-middle">
      <p>相册(0/7)</p>
      <i class="iconfont icon-tianjiatupian"></i>
      <div class="mine-middle middle-top">
        <div class="top">内心独白</div>
        <div class="bottom">熟悉一个人竟然可以到见面不识💓️</div>
      </div>
     <div class="mine-middle middle-bottom">
       <span class="middle-bottom left">基本信息</span>
       <span class="middle-bottom right">完善基本信息魅力值+10</span>
       <div class="middle-bottom bottom">
         <span class="bottom-age">18岁</span>
         <span class="bottom-leo">狮子座</span>
       </div>
     </div>
    </div>
    <div class="mine-bottom">
      <h5>兴趣爱好</h5>
      <div class="bottom-left">
        <p class="bottom left-food">美食
          <i class="iconfont icon-canju"></i></p>
        <i class="iconfont icon-shuxian"></i>
        <p class="bottom left-movie">电影</p>
        <p class="bottom left-want">想去</p>
        <p class="bottom left-hobby">爱好</p>
      </div>
      <div class="bottom-right">


      </div>


    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }

  .mine {
    width: 100%;
    height: 900px;
    background: white;
    position: relative;
    .mine-top {
      position: absolute;
      top: -130px;
      left: 0;
      width: 100%;
      height: 300px;
      .userBg {
        width: 100%;
        height: 100%;
        display: block;
        opacity: .6;
      }
      .userPic {
        width: 70px;
        height: 70px;
        display: inline-block;
        border-radius: 70px;
        border: 3px solid silver;
        position: absolute;
        bottom: -4%;
        left: 20px;
        margin-top: -50px;
      }
      .userName {
        position: absolute;
        display: inline-block;
        color: #fff;
        font-size: 18px;
        font-weight: 300;
        bottom: 3%;
        left: 110px;
      }
      i {
        width: 18px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        display: inline-block;
        border-radius: 50%;
        background: snow;
        color: palevioletred;
        border: 0.3px solid rgb(398, 25, 25, 0.2);
        position: absolute;
        bottom: -5%;
        left: 70px;

      }
      .middleBot-left {
        width: 100%;
        height: 20px;
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        line-height: 20px;
        font-size: 10px;
        color: palevioletred;
        position: absolute;
        bottom: -10%;
        left: -4%;
      }

    }
    .mine-middle {
      width: 100%;
      background: #fff;
      position: absolute;
      top: 280px;
      line-height: 60px;
      p {
        position: absolute;
        top: -100px;
        left: 4%;
        color: silver;
        font-size: 13px;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      }
      i {
        position: absolute;
        top: -50px;
        left: 4%;
        font-size: 50px;
        width: 250px;
        height: 250px;
      }
      .middle-top {
        width: 100%;
        height: 50px;
        position: absolute;
        top: 20px;
        left: 0;
        border-top: 3px solid #E8E8E8;
        border-bottom: 3px solid #E8E8E8;
        .top {
          color: #A8A8A8;
          font-family: ".SF NS Display";
          position: absolute;
          top: -20px;
          left: 4%;
          font-size: 14px;
        }
        .bottom {
          color: black;
          font-family: ".SF NS Display";
          position: absolute;
          top: 10%;
          left: 4%;
          font-size: 15px
        }
      }
      .middle-bottom{
        width: 100%;
        height: 100px;
        position: absolute;
        .left{
          color: #A8A8A8;
          font-family: ".SF NS Display";
          position: absolute;
          bottom: 222px;
          left: 4%;
          font-size: 14px;
        }
        .right{
          color: palevioletred;
          position: absolute;
          bottom: 222px;
          left: 50%;
          font-size: 13px
        }
       .bottom{
         width: 100%;
         height: 60px;
         position: absolute;
         top: -190px;
         border-bottom: 3px solid #E8E8E8;
         .bottom-age{
           border: 1px solid silver;
           border-radius: 35%;
           font-size: 15px;
           padding: 2px;
           margin: 10px;
         }
         .bottom-leo{
           border: 1px solid silver;
           border-radius: 30%;
           font-size: 15px;
           padding: 4px;
         }
       }
      }
    }
    .mine-bottom{
      position: absolute;
      top: 440px;
      width: 100%;
      height: 100px;
      h5{
        color: #A8A8A8;
        font-size: 13px;
        margin-left: 10px;
      }
      .bottom-left{
        width: 30%;
        height: 100px;
        line-height: 100px;
        margin-left: 10px;
      }
    }
  }
</style>
