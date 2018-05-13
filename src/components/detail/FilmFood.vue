<template>
  <div class="detail">
    <div class="detail_top">
      <i @click="goBack" class="iconfont icon-arrow-right-copy-copy-copy"></i>
      <i class="iconfont icon-dianying5"></i>
      <div class="detail_title">
        <p>{{this.item.filmName}}</p>
      </div>
      <div class="detail_pic">
        <div v-show="!this.flag" class="detail_left">
          <div>
            <img :src="this.item.filmPic" alt="">
          </div>
        </div>

        <div v-show="this.flag" class="detail_right">
          <div class="detail_right_top">
            <i class="iconfont icon-wujiaoxing active"></i>
            <i class="iconfont icon-wujiaoxing active"></i>
            <i class="iconfont icon-wujiaoxing active"></i>
            <i class="iconfont icon-wujiaoxing active"></i>
            <i class="iconfont icon-wujiaoxing"></i>
            9.0
          </div>
          <div class="detail_right_bottom">
            <b>{{this.item.filmInfo}}</b>
            <p>{{this.item.filmContent}}</p>
          </div>
        </div>
        <div class="focus">
          <span class="arrow active"></span>
          <span class="arrow"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {item: [], flag: true}
    },
    created() {
      this.item = this.$route.params.item;
      // console.log(this.item);
    },
    methods: {
      goBack() {
        this.$router.goBack();
      }
    },
    components: {},
    computed: {}
  }
</script>

<style scoped lang="less">
  .detail {
    .detail_top {
      width: 100%;
      height: 350px;
      background: -webkit-linear-gradient(top, #00CDCD, #00C5CD, #00CDCD, #00C5CD);
      position: relative;
      .icon-arrow-right-copy-copy-copy {
        color: #fff;
        font-size: 24px;
        position: absolute;
        left: 10px;
        top: 20px;
      }
      .icon-dianying5 {
        color: #DCDCDC;
        font-size: 26px;
        position: absolute;
        top: 35px;
        left: 46%;
      }
      .detail_title {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        padding: 5px;
        position: absolute;
        top: 60px;
        line-height: 40px;
        text-align: center;
        p {
          font-size: 18px;
          color: #fff;
          letter-spacing: 1px;
        }
      }
      .detail_pic {
        width: 200%;
        .detail_left {
          width: 100%;
          height: 200px;
          position: absolute;
          top: 120px;
          /*left: -245px;*/
          div {
            width: 110px;
            height: 160px;
            margin-left: 35%;
            box-sizing: border-box;
            border: 2px solid #fff;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .detail_right {
          position: absolute;
          top: 120px;
          .detail_right_top {
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #fff;
            i {
              color: silver;
            }
            i.active {
              color: lavender;
            }
          }
          .detail_right_bottom {
            width: 100%;
            box-sizing: border-box;
            padding: 17px;
            letter-spacing: 2px;
            b {
              line-height: 40px;
              color: #fff;
              font-weight: 500;
            }
            p {
              color: #fff;
              font-family: 华文行楷;
            }
          }
        }
        .focus {
          position: absolute;
          bottom: 30px;
          left: 39%;
          .arrow {
            width: 10px;
            height: 10px;
            display: block;
            border-radius: 50%;
            background: silver;
            float: left;
            margin-left: 20px;
          }
          .active.arrow {
            background: #fff;
          }
        }

      }
    }
  }
</style>
