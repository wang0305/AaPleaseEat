<template>
  　　<div class="page">
  <!--　　　　动态绑定路由动画，根据路由状态的不同绑定不同的路由动画分别为  ：‘slide-left’  和 'slide-right'-->
  　　　　<transition :name="transitionName">
  　　　　　　<router-view class="Router"></router-view>
  　　　　</transition>
  　　</div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        transitionName: 'slide-right'  //默认动态路由变化为slide-right
      }
    },
    watch: {
      '$route' (to, from) {
        let isBack = this.$router.isBack;  //监听路由变化时的状态为前进还是后退
        // console.log(this.$route);
        if(isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
      }
    }
  }
</script>

<style scoped lang="less">
  .Router {
    position: absolute;
    width: 100%;
    transition: all .4s ease;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }
</style>
