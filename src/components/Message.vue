<template>
  <div class="message">
    <div class="message_nav">
      <div class="nav nav_left active">消息</div>
      <div class="nav nav_right">饭友</div>
      <p>忽略未读</p>
    </div>
    <div class="bg">
      <img src="http://img3.duitang.com/uploads/item/201509/17/20150917021227_MNWdw.jpeg" alt="">
    </div>
    <tab></tab>
  </div>
</template>

<script>
  import tab from '../base/Tab'
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
  .message {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    .message_nav {
      width: 100%;
      height: 6.5%;
      line-height: 50px;
      background: #f4f4f4;
      text-align: center;
      padding-left: 20px;
      box-sizing: border-box;
      .nav {
        width: 20%;
        line-height: 50px;
        height: 50px;
        display: inline-block;
      }
      .nav.active {
        color: lightcoral;
        border-bottom: 1px solid lightcoral;
      }
      p {
        float: right;
        font-size: 15px;
        color: red;
        margin-right: 26px;
      }
    }
    .bg{
      width: 100%;
      height: 93%;
      opacity: .5;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
