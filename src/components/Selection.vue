<template>
  <div class="container">
    <div class="header">
      <i class="iconfont icon-arrow-right-copy-copy-copy" @click="close"></i>
      <span class="select">筛选</span>
      <span class="button" @click="defined">确定</span>
    </div>
    <div class="sex">
      <h4>性别</h4>
      <div class="box">
        <span v-for="item in sex" @click="fun($event)" class="sex-item">{{item.type}}</span>
      </div>
    </div>
    <div class="age">
      <h4 class="age-title">年龄</h4>
      <div id="screen"></div>
      <!--这个盒子本来是要映射滑动的年龄的-->
      <input type="range" id='range' max="35" min="18" value="25" @click="modify">
      <div class="type">
      </div>
      <h4 class="list">类型</h4>
      <div class="bottom">
        <span v-for="item in type" class="type-item" @click="fun($event)">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  let sex = [{"type": "不限"}, {"type": "男士"}, {"type": "女士"}];
  let type = [{"name": "不限"}, {"name": "约会"}, {"name": "聚会"}];
  // let screen = document.getElementById("screen");
  // let elem = document.getElementById("range");
  export default {
    created() {
    },
    data() {
      return {
        sex,
        type,
      }
    },
    methods: {
      close() {

      },
      defined() {
        this.$router.history.go(-1)
      },
      fun(e) {//选中的盒子有颜色，其他的盒子颜色也存在
        e.target.style.background = "#fa536f"
        e.target.style.color="#fff"
      },

    modify(e){
      // screen.innerHTML= this.value
      // console.log(screen.innerHTML)
    },
      close(){
        this.$router.history.go(-1)
      }
    },
    components: {},
    computed: {}
  }
</script>

<style scoped lang="less">
  input[type="range"] {
    display: block;
    -webkit-appearance: none;
    background-color: #fa536f;
    width: 40%;
    position: absolute;
    left: 30%;
    height: 5px;
    border-radius: 5px;
    margin: 30px auto;
    outline: 0;
  }
  /*input[type="range"]:before{*/
    /*content: '';*/
    /*width: 10px;*/
    /*height: 3px;*/
    /*background-color: blue;*/
  /*}*/

  input[type="range"]::-webkit-slider-thumb {
    position: relative;
    -webkit-appearance: none;
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #fff;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    -webkit-box-shadow: 0 1px 1px black inset;
  }

  h4 {
    font-weight: normal;
    line-height: 30px;
    color: gray;
    text-align: center;
    margin-left: -5px;
  }

  .box, .type {
    margin: 30px auto;
    height: 30%;
    padding: 10% auto;
    overflow: hidden;
/*box的底边框出不来*/
  }

  .bottom {
    width: 100%;
    height: 18px;
    float: left;
    margin: 20px 30%;
  }

  .list {
    display: block;
    line-height: 60px;
  }

  .type-item {
    display: inline-block;
    text-align: center;
    width: 40px;
    height: 100%;
    padding: 3px;
    font-size: 14px;
    line-height: 18px;
    border: 1px solid #fa536f;
    color: #fa536f;
  }

  .container {
    padding: 0;
    margin: 0;
    overflow: hidden;
    width: 100%;
    height: 60%;
    position: absolute;
    left: 0;
    top: 0;
    background: -webkit-gradient(linear, left bottom, left top, color-stop(0%, lightgoldenrodyellow), color-stop(100%, #ffffff));
    .header {
      /*width: 100%;*/
      overflow: hidden;
      i {
        font-size: 18px;
        color: grey;
        font-weight: normal;
        float: left;
        margin-right: 39%;
      }
      .select {
        float: left;
        margin-right: 35%;
      }
      .button {
        color: crimson;
      }
    }
    .sex {
      margin: 30px auto;
      height: 20%;
      /*padding: 10% auto;*/
      overflow: hidden;
      .box {
        width: 100%;
        height: 24px;
        float: left;
        margin: 30px 30%;
        h4 {
          font-weight: normal;
          line-height: 30px;
          color: gray;
          text-align: center;
          margin-left: -5px;
        }
        span {
          display: inline-block;
          text-align: center;
          width: 40px;
          height: 100%;
          padding: 3px;
          font-size: 14px;
          line-height: 18px;
          border: 1px solid #fa536f;
          color: #fa536f;
        }
      }
    }

  }
</style>
