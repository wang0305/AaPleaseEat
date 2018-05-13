<template>
  <div class="home">
    <div class="home_header">
      <div class="home_header_nav">
        <router-link
          tag="div"
          to="/location"
          class="home_header_left">
          <i class="iconfont icon-icon-test"></i>
          <span>北京</span>
        </router-link>
        <div class="home_title">
          <p>约饭</p>
        </div>
        <i class="iconfont icon-guolv"></i>
      </div>
      <ul class="home_nav">
        <li class="home_item active">热门</li>
        <li class="home_item">约今天</li>
        <li class="home_item">约周末</li>
        <li class="home_item">吃好料</li>
        <li class="home_item">看电影</li>
        <li class="home_item">去旅游</li>
        <li class="home_item">附近</li>
      </ul>
    </div>
    <div class="home_night">
      <p>
        今晚我有空
        <i class="iconfont icon-aixin1-copy"></i>
      </p>
    </div>
    <router-link
      to="/add"
      tag="div"
      class="add">
      <i class="iconfont icon-icon--"></i>
    </router-link>
    <listItem></listItem>
    <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
import listItem from '../base/List_item';
import tab from '../base/Tab'
  export default {
    data() {
      return {}
    },
    methods: {},
    components: {listItem,tab},
    computed: {}
  }
</script>


<style scoped lang="less">
  .home{
    background: #f4f4f4;
    width: 100%;
    height: 100%;
    .home_header{
      width: 100%;
      height: 120px;
      background: -webkit-linear-gradient(left,#fa536f,#FF8C69,#FF8247);
      .home_header_nav{
        width: 100%;
        height: 90px;
        line-height: 90px;
        overflow: hidden;
        .home_header_left{
          margin-left: 10px;
          color: #fff;
          float: left;
          i{
            font-size: 18px;
          }
        }
        .home_title{
          width: 60%;
          float: left;
          text-align: center;
          font-size: 21px;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          p{
            color: #fff;
          }
        }
        i{
          margin-left: 19px;
          color: #fff;
          font-size: 25px;
        }
      }
      ul,li{
        list-style: none;
      }
      .home_nav{
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin: 0 auto;
        overflow: hidden;
        .home_item{
          float: left;
          margin-left: 20px;
          color: lavender;
        }
        .home_item.active{
          font-size: 18px;
          color: #fff;
        }
      }
    }
    .home_night{
      width: 100%;
      box-sizing: border-box;
      height: 45px;
      line-height: 45px;
      padding: 0 15px 0 15px;
      background: #fff;
      p{
        letter-spacing: 2px;
      }
      i{
        float: right;
        color: #FFB6C1;
      }
    }
    .add{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #EE9572;
      box-shadow: 0 0 15px #FF8C69, 0 0 5px #EE8262;
      opacity: .6;
      position: fixed;
      bottom: 100px;
      right: 30px;
      line-height: 50px;
      text-align: center;
      i{
        font-size: 50px;
        color: #fff;
      }
    }
  }
</style>
