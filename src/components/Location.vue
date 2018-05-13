<template>
  <div class="container">
    <div class="header">选择城市</div>
    <input class="input" id="search"
           type="text" placeholder="城市|拼音" v-model="msg">{{Info}}
    <button @click="searched">搜索</button>
   <li class="select" @click="searched">{{msg}}</li>
    <i class="iconfont icon-sousuo search"></i>
    <div class="position">
      <p>当前定位</p>
      <p class="line"></p>
    </div>
    <span class="locate">
        <b class="iconfont icon-icon-test"></b>
      北京</span>
    <div class="hot-city">
      <p>热门城市</p>
      <p class="line"></p>
      <ul>
        <router-link to="/rankings"
                     tag="li" @click="getName">北京
        </router-link>
        <router-link to="/rankings"
                     tag="li" @click="getName">深圳
        </router-link>
        <router-link to="/rankings"
                     tag="li" @click="getName">广州
        </router-link>
        <router-link to="/rankings"
                     tag="li" @click="getName">上海
        </router-link>
        <router-link to="/rankings"
                     tag="li" @click="getName">成都
        </router-link>
        <router-link to="/rankings"
                     tag="li" @click="getName">武汉
        </router-link>
        <router-link to="/rankings"
                     tag="li" @click="getName">重庆
        </router-link>
        <router-link to="/rankings"
                     tag="li" @click="getName">南京
        </router-link>
        <router-link to="/rankings"
                     tag="li" @click="getName">西安
        </router-link>
        <router-link to="/rankings"
                     tag="li" @click="getName">济南
        </router-link>
        <router-link to="/rankings"
                     tag="li" @click="getName">杭州
        </router-link>
        <router-link to="/rankings"
                     tag="li" @click="getName">天津
        </router-link>
        <router-link to="/rankings"
                     tag="li" @click="getName">沈阳
        </router-link>
      </ul>
    </div>
    <div class=" detail">
      <span class="a">a</span>
      <ul class="list">
        <router-link
          to="/rankings"
          tag="li"
          class="item"
          v-for="(item,index) in city">
          <p @click="getName">{{item.name}}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getCity} from "../api";

  export default {
    created() {
      this.getCity()
    },
    data() {
      return {
        city: [],
        Info: '',
        msg:'',
      }
    },
    methods: {
      async getCity() {
        this.city = await getCity()
        this.city = JSON.parse(this.city)
      },
      async sortList() {

      },
      searched() {
       this.$router.history.go(-1)
      },

      async getName(e){
        this.msg=e.target.innerHTML;
        console.log(e.target.innerHTML);
        return  this.msg
      }
    },
    components: {},
    computed: {
    }
  }
</script>

<style scoped lang="less">
  .container {
    margin: 0;
    padding: 0 2%;
    position: relative;
    .header {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 16px;
    }
    .input {
      display: block;
      width: 83%;
      -webkit-appearance: none;
      height: 30px;
      padding: 0 25px;
      border-radius: 5px;
    }
    button{
      border-radius: 3px;
      position: absolute;
      top:48px;
      right:22px;
     background: lavender;
    }
    .select{
      list-style: none;
      background: #f6f6f6;
      margin-top: 10px;

    }
    .search {
      position: absolute;
      left: 13px;
      top: 48px;
      z-index: 1;
    }
    .position {
      position: relative;
      overflow: hidden;
      margin: 10px 0;
      p {
        display: inline-block;
        color: gray;
      }
      .line {
        display: inline-block;
        float: right;
        width: 80%;
        height: 1px;
        background: lavender;
        overflow: hidden;
        position: absolute;
        top: 10px;

      }
    }
    .locate {
      width: 35px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      background: #fa536f;
      font-size: 14px;
      color: #fff;
      border-radius: 3px;
      padding: 5px;
    }
    .hot-city {
      margin: 8px auto;
      position: relative;
      overflow: hidden;
      p {
        font-size: 16px;
        color: gray;

      }
      .line {
        display: inline-block;
        float: left;
        width: 80%;
        height: 1px;
        background: lavender;
        overflow: hidden;
        position: absolute;
        top: 10px;
        right: 5px;
      }
      ul {
        list-style: none;
        width: 100%;
        overflow: hidden;
        -webkit-padding-start: 0;
        li {
          padding: 0 8px;
          list-style: none;
          float: left;
          width: 60px;
          height: 30px;
          margin: 7px;
          text-align: center;
          line-height: 30px;
          background: #f6f6f6;
          font-size: 14px;
          color: gray;
        }
      }
    }
    .detail {
      width: 100%;
      padding-bottom: 50px;
      .a {
        display: block;
        width: 95%;
        height: 14px;
        font-size: 12px;
        padding: 0 7px;
        /*border: 1px solid lavender;*/
        background: #f6f6f6;
        color: gray;
        font-weight: bold;
      }
      ul {
        list-style: none;
        width: 100%;
        overflow: hidden;
        -webkit-padding-start: 0;
        margin: 0 auto;
        li {
          height: 30px;
          border-bottom: 1px solid lavender;
          line-height: 30px;
          font-size: 16px;
          color: gray;
          padding: 0 5px;
        }
      }
    }
  }
</style>
