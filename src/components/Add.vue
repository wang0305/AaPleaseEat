<template>
  <div class="add">
    <div class="add-header">
      <span @click="goBack" class="span1">取消</span>
      <div>
        <span class="span3">约会</span>
        <span class="span4">聚会</span>
      </div>
      <span class="span2">发布</span>
    </div>
    <div class="session">
      <span>对象</span>
      <i class="iconfont icon-sousuo-"></i>
      男士
      <i></i>
      女士
      <i></i>
      不限
    </div>
    <div class="add-contain">
      <div class="expect">
        <span>期望</span>
        <input type="text" placeholder="希望TA是什么样的呢？">
      </div>
      <div class="explain">
        <span>说明</span>
        <input placeholder="打动对方和你约会"></input>
      </div>
      <div class="scene">
        <span>场景</span>
        <input type="text" placeholder="想和TA去哪啊？">
      </div>
      <div class="scene">
        <span>时间</span>
        <input type="text" placeholder="什么时间去呢？">
      </div>
      <div class="price">
        <span>费用</span>
        <span>我请客</span>
        <span>AA</span>
      </div>
    </div>
    <div class="add-bottom">
      <div class="add-bottom-left">
        <i></i>
        <span>约会须知</span>
      </div>
      <div class="add-bottom-right">
        <i></i>
        <span>不让TA看见(0)</span>
      </div>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {}
    },
    methods: {
      goBack(){
        this.$router.goBack();
      }
    },
    components: {},
    computed: {}
  }
</script>

<style scoped lang="less">
  .add-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: -webkit-linear-gradient(left,#fa536f,#FF8C69,#FF8247);
    line-height: 75px;
    height: 75px;
    color: white;
    .span1 {
      margin-left: 10px;
    }
    .span2 {
      margin-right: 10px;
    }
    div {
      .span3 {
        margin-right: 20px;
      }
      .span4 {
        margin-left: 20px;
      }
    }
  }

  .session {
    height: 60px;
    background-color: white;
    line-height: 60px;
    padding: 0 150px 0 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
  }

  .add-contain {
    .expect {
      background-color: white;
      padding-left: 10px;
      height: 60px;
      line-height: 60px;
      margin-bottom: 5px;
      span {
        font-size: 16px;
        color: #a1a1a1;
      }
      input {
        margin-left: 20px;
        border: 0;
        outline: none;
        font-size: 16px;
      }
    }
    .explain {
      padding-left: 10px;
      background-color: white;
      margin-bottom: 5px;
      position: relative;
      height: 120px;
      span {
        position: absolute;
        top: 0;
        font-size: 16px;
        color: #a1a1a1;
      }
      input {
        margin-left: 47px;
        border: 0;
        outline: none;
        font-size: 16px;
      }
    }
    .scene {
      padding-left: 10px;
      background-color: white;
      margin-bottom: 2px;
      height: 60px;
      span {
        font-size: 16px;
        color: #a1a1a1;
      }
      input {
        margin-left: 20px;
        height: 100%;
        border: 0;
        outline: none;
        font-size: 16px;
      }
    }
    .price {
      height: 60px;
      background-color: white;
      color: #c1c1c1;
      padding-left: 10px;
      line-height: 60px;
      span {
        margin-right: 20px;
        font-size: 16px;
      }
    }
  }
  .add-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 15px;
    font-size: 14px;
  }

</style>
