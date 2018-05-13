<template>
  <div id="food">
    <div class="header">
      <div class="cate_nav">
        <i class="iconfont icon-arrow-right-copy-copy-copy" @click="goBack"></i>
        美食
      </div>
    </div>
    <div class="content">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="搜索">
    </div>
    <div class="footer">
      <ul class="list">

        <router-link
          to='/location'
          class="one"
          tag="li">
          <i class="iconfont icon-icon-test"></i><span>北京</span>
        </router-link>
        <li class="tow"><i class="iconfont icon-icon-test"></i>商圈</li>
        <li class="three"><i class="iconfont icon-canju"></i>菜系</li>
        <li style="border-right: 0"><i class="iconfont icon-paixu"></i>排序</li>
      </ul>
      <div class="business">
        <ul class="left">
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
        </ul>
        <ul class="right">
          <li>回龙观</li>
          <li>回龙观</li>
          <li>回龙观</li>
          <li>回龙观</li>
          <li>回龙观</li>
          <li>回龙观</li>
        </ul>
      </div>
      <div class="cook">
        <ul>
          <li>重庆火锅</li>
          <li>重庆火锅</li>
          <li>重庆火锅</li>
          <li>重庆火锅</li>
          <li>重庆火锅</li>
          <li>重庆火锅</li>
          <li>重庆火锅</li>
          <li>重庆火锅</li>
          <li>重庆火锅</li>
        </ul>
      </div>
      <div class="sort">
        <ul>
          <li>默认</li>
          <li>按星级排序</li>
          <li>按星级排序</li>
          <li>按星级排序</li>
          <li>按星级排序</li>
          <li>按星级排序</li>
          <li>按星级排序</li>
          <li>按星级排序</li>
          <li>按星级排序</li>
          <li>按星级排序</li>
        </ul>
      </div>
      <div class="bottom" v-for="(eat,index) in food">
        <img :src="eat.restaurantPic">
        <div class="message">
          <a>{{eat.restaurantName}}</a>
          <ul>
            <li>{{eat.restaurantType}}</li>
            <li>{{eat.restaurantPosition}}</li>
          </ul>
          <div class="right">
            <p>{{eat.dateNumber}}个约会</p>
            <span>发起约会</span>
          </div>

        </div>


      </div>

    </div>
  </div>
</template>

<script>
  import {getFood} from '../api';

  export default {
    data() {
      return {food: []}
    },
    created() {
      this.getFoodThing();

    },
    methods: {
      async getFoodThing() {
        this.food = await getFood();
        this.food = JSON.parse(this.food);
      },
      goBack() {
        this.$router.history.go(-1);
      }
    },
    components: {},
    computed: {}
  }
</script>

<style scoped lang="less">
  #food {
    width: 100%;
    height: 100%;
    background: whitesmoke;
    float: left;
    padding: 0;
    margin: 0;
    position: relative;
  }

  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    float: left;
    color: gray;
    font-size: 18px;
    background: white;
    .cate_nav {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 18px;
      letter-spacing: 2px;
      color: #FF3030;
      border-bottom: 5px solid #f4f4f4;
      i {
        position: absolute;
        top: 5px;
        left: 5px;
        color: gray;
      }
    }
    span {
      float: left;

    }
    .nav {
      text-align: center;
    }
    .nav a {
      margin-right: 20px;
    }
  }

  .content {
    width: 100%;
    float: left;
    margin: 7px 0;
    background: white;
    position: relative;
    i {
      position: absolute;
      top: 5px;
      left: 5px;
      color: gray;
    }
    input {
      float: left;
      width: 96%;
      margin-left: 30px;
      height: 23px;
      border: 0;
      outline: none;
      font-size: 14px;

    }
  }

  .footer {
    background: white;
    width: 100%;
    height: 100%;
    float: left;
    .list {
      float: left;
      list-style: none;
      width: 100%;
      height: 35px;
      line-height: 35px;
      padding-left: 0;
      margin: 0 auto;
      .one .tow .three {
        position: relative;
        i {
          position: absolute;
          top: 5px;
          left: 7px;
          color: gray;
        }

      }
      li {
        height: 100%;
        text-align: center;
        border-right: 1px solid gainsboro;
        float: left;
        width: 24.5%;
        color: gray;
      }
    }
    .business {
      width: 100%;
      height: 200px;
      position: absolute;
      top: 0;
      left: 0;
      background: #000;
      opacity: 0.3;
      display: none;
      .left {
        width: 50%;
        height: 100%;
        float: left;
        list-style: none;
        padding: 0;
        background: white;
        margin: 0;
        li {
          margin-left: 5px;
          border-bottom: 1px solid gainsboro;
          padding: 3px 0;
        }
      }
      .right {
        width: 50%;
        height: 100%;
        float: left;
        list-style: none;
        padding: 0;
        background: whitesmoke;
        margin: 0;
        li {
          border-bottom: 1px solid gainsboro;
          margin-left: 5px;
          padding: 3px 0;
        }

      }
    }
    .cook {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: white;
      display: none;
      ul {
        list-style: none;
        width: 100%;
        height: 300px;
        padding: 0;
        overflow: hidden;
        li {
          margin: 10px;
          border-bottom: 1px solid gainsboro;
          padding-bottom: 10px;
        }
      }
    }
    .sort {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: white;
      display: none;
      ul {
        list-style: none;
        width: 100%;
        height: 300px;
        padding: 0;
        overflow: hidden;
        li {
          margin: 10px;
          border-bottom: 1px solid gainsboro;
          padding-bottom: 10px;
        }
      }
    }
    .bottom {
      width: 99%;
      height: 100px;
      float: left;
      border-top: 1px solid gainsboro;
      line-height: normal;
      padding:20px 0 20px;
      img {
        width: 80px;
        height: 100px;
        float: left;
        padding-left: 10px;
      }
      .message {
        display: flex;
        flex-direction: column;
        a {
          float: left;
          margin: 0;
          padding-left: 20px;
          color: #000;
          font-size: 16px;
        }
        ul {
          float: left;
          padding-left: 35px;
          color: gray;
          font-size: 14px;
          padding-top: 5px;
          margin: 5px 0;
        }
        p {
          margin: 0;
          padding-left: 20px;
          display: inline-block;
        }
        span {
          padding: 2px;
          font-size: 14px;
          border: 1px solid red;
          color: red;
          border-radius: 1px;
          float: right;
          margin-right: 10px;
        }
      }
    }

  }


</style>
