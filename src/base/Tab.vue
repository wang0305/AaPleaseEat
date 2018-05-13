<template>
  <div class="footer">
    <router-link to="/rankings">
      <i class="iconfont icon-paixing"></i>
      排行
    </router-link>
    <router-link to="/find">
      <i class="iconfont icon-dingwei"></i>
      发现
    </router-link>
    <router-link to="/message">
      <i class="iconfont icon-xiaoxi"></i>
      消息
    </router-link>
    <router-link to="/myMessage">
      <i class="iconfont icon-icon-test1"></i>
      我的
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
    components: {}
  }
</script>

<style scoped lang="less">

  .footer {
    border-top: 1px solid #ccc;
    position: fixed;
    height: 50px;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: #fff;
    a {
      width: 23.5%;
      display: inline-block;
      height: 50px;
      line-height: 50px;
      vert-align: middle;
      text-align: center;
      text-decoration: none;
    }
    a.router-link-active {
      color: red;
    }
  }
</style>
