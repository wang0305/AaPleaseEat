<template>
  <div class="mine">
    <div class="mine-top">
      <!--头像-->
      <router-link
        :to="{name:'/mine'}"
        class="mine"
        tag="div">
        <img class="userBg" src="../../img/3.jpg" alt="">
        <img class="userPic" src="../../img/3.jpg" alt="">
        <span class="userName">肉肉</span>
        <span class="iconfont icon-nvxing userAge">18</span>
      </router-link>
    </div>

    <div class="mine-middle">
      <div class="mine-middle-center">
        <div class="middle middle-left">信用金 <p class="count middle-count">0</p></div>
        <div class="middle middle-right">魅力值 <p class="count middle-counts">500</p></div>
      </div>
    </div>
    <div class="mine-middleBot">
      <div class="mine-center">
        <i class="iconfont icon-shipin"></i>
        <span class="middleBot middleBot-left">个人视频</span>

      </div>
      <div class="mine-center">
        <i class="iconfont icon-credentials_icon"></i>
        <span class="middleBot middleBot-center">身份证</span>
      </div>
      <div class="mine-center">
        <i class="iconfont icon-xueli"></i>
        <span class="middleBot middleBot-right">学历</span>
      </div>
    </div>
    <div class="mine-Bot">
      <ul>
        <li class="mine-item">
          <div class="mine-item-bg">
            <i class="iconLeft iconfont icon-yanjing"></i>
            <p>最近来访</p>
            <i class="iconfont icon-chevron-copy-copy arrow"></i>
          </div>
        </li>


            <router-link
              :to="{name:'/date'}"
              class="date"
              tag="div">
              <li class="mine-item">
                <div class="mine-item-bg">
                  <i class="iconLeft iconfont icon-aixinchupin"></i>
                  <p>我的约会</p>
                  <i class="iconfont icon-chevron-copy-copy arrow"></i>
                </div>
              </li>
            </router-link>



        <li class="mine-item">
          <div class="mine-item-bg">
            <i class="iconLeft iconfont icon-liuyan"></i>
            <p>我的饭友</p>
            <i class="iconfont icon-chevron-copy-copy arrow"></i>
          </div>
        </li>
        <li class="mine-item">
          <div class="mine-item-bg">
            <i class="iconLeft iconfont icon-shezhi"></i>
            <p>设置</p>
            <i class="iconfont icon-chevron-copy-copy arrow"></i>
          </div>
        </li>

      </ul>
    </div>

<tab></tab>
  </div>

</template>


<script>
  import tab from '../base/Tab';
  export default {
    data () {
      return {}
    },
    methods: {},
    components: {tab},
    computed: {}
  }
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
    height: 100%;
    background: #f4f4f4;
    position: relative;
    .mine-top {
      position: absolute;
      top: 0;
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
        top: 50%;
        left: 20px;
        margin-top: -50px;
      }
      .userName {
        position: absolute;
        display: inline-block;
        color: #fff;
        font-size: 18px;
        font-weight: 300;
        top: 40%;
        left: 110px;
      }
      .userAge {
        width: 40px;
        height: 20px;
        display: inline-block;
        border-radius: 10px;
        background: pink;
        text-align: center;
        line-height: 20px;
        color: deeppink;
        position: absolute;
        top: 41%;
        left: 155px;
      }
    }
    .mine-middle {
      width: 100%;
      height: 60px;
      background: silver;
      position: absolute;
      top: 220px;
      opacity: .4;
      overflow: hidden;
      .mine-middle-center {
        margin: 10px;
        .middle {
          width: 48%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          float: left;
          font-size: 16px;
          color: white;
          position: relative;
        }
        .count {
          position: absolute;
          top: 0;
          left: 70%;
        }
        .middle-count {
          color: gold;
        }
        .middle-counts {
          color: deeppink;
        }
        .middle-left {
          border-right: 1px solid #fff;
        }
        .middle-right {
          margin-left: -1px;
        }
      }

    }
    .mine-middleBot {
      width: 100%;
      height: 60px;
      background: #fff;
      position: absolute;
      top: 280px;
      line-height: 60px;
      .mine-center {
        width: 32%;
        text-align: center;
        float: left;
        i {
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          display: inline-block;
          border-radius: 50%;
          background: lightgrey;
          color: #fff;
        }
        .middleBot {
          color: silver;
          font-size: 14px;
          font-weight: 200;
        }
      }
    }
    .mine-Bot {
      width: 100%;
      position: absolute;
      top: 340px;
      .mine-item {
        width: 100%;
        height: 70px;
        line-height: 70px;
        border: 1px solid lavender;
        .mine-item-bg {
          width: 95%;
          margin: 0 auto;
          .iconLeft {
            margin-top: 22px;
            width: 25px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            color: lightcoral;
            display: inline-block;
            border: 1px solid pink;
            border-radius: 50%;
            float: left;
          }
          p {
            float: left;
            margin-left: 20px;
          }
          .arrow {
            width: 10px;
            height: 10px;
            display: inline-block;
            float: right;
            margin-right: 15px;
          }
        }

      }
    }
  }


</style>
