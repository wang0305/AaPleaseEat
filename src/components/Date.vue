<template>
  <div class="date">
    <div class="date_nav">
      <div class="nav nav_send">我发起的</div>
      <div class="nav nav_signUp">我报名的</div>
      <div class="nav nav_hobby">我感兴趣的</div>
      <div class="nav nav_join">我参与的</div>
    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {}
    },
    methods: {},
    components: {},
    computed: {}
  }
</script>

<style scoped lang="less">
  .date{
    width: 800px;
    height: 100%;
    background: #f4f4f4;
    .date_nav {
      width: 100%;
      height: 50px;
      line-height: 50px;
      background: #f4f4f4;
      text-align: center;
      margin-left: 20px;
      .nav {
        width: 20%;
        line-height: 50px;
        height: 50px;
        display: inline-block;
      }
      .nav_send {
        color: lightcoral;
        border-bottom: 1px solid lightcoral;
        font-size: 13px;
      }
      .nav_signUp{
        color: lightcoral;
        font-size: 13px;
      }
      .nav_hobby{
        color: lightcoral;
        font-size: 13px;
      }
      .nav_join{
        color: lightcoral;
        font-size: 13px;
      }
    }
  }
</style>
