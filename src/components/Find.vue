<template>
  <div class="find">
    <div class="find-banner"></div>
    <div class="find-top clear">
      <router-link
        :to="{name:'/food'}"
        class="find-link left"
        tag="div">
        <i class="iconfont icon-canju"></i><span>美食</span>
      </router-link>
      <router-link
        :to="{name:'/film'}"
        class="find-link right"
        tag="div">
        <i class="iconfont icon-dianying"></i><span>电影</span>
      </router-link>
    </div>
    <!--发现朋友圈 选项卡-->
    <div class="find-down">
      <div class="find-chose">
        <div class="find-part">
          <ul class="find-one clear">
            <!--<li v-for="(change,index) in changeTitile" @click="changeOne(index)">{{change.tabName}}</li>-->
            <li @click="hotRange">最热</li>
            <li @click="lastestRange">最新</li>
          </ul>
        </div>
        <div class="find-share">
          <router-link
            :to="{name:'updateCircle'}"
            tag="a"
          >
            分享你的美食生活见闻...
            <i class="find-share-to iconfont icon-tianxiandaoiconyuanquanjia"></i>
          </router-link>


        </div>
      </div>
      <div>
        <div class="find-friend">
          <ul>
            <li v-for="(friendMes,index) in friendCircle ">
              <div class="find-friend-det clear">
                <div class="friend-title clear">
                  <img
                    :src="friendMes.circlePic"
                    alt="">
                  <div class="find-name">
                    <h5>{{friendMes.circleName}}</h5>
                    <span class="clear"><i class="iconfont icon-nvxing"></i>{{friendMes.circleAge}}</span>
                    <span class="clear"><i class="iconfont icon-xihuan1"></i>{{friendMes.circleCredit}}</span>
                  </div>
                </div>
                <span class="find-time">{{friendMes.circleTime}}</span>
              </div>
              <div class="find-detail">
                <h4>{{friendMes.circleTitle}}</h4>
                <p>{{friendMes.circleContent}}</p>
                <img :src="friendMes.circleImg" alt="">
                <a href=""><i class="iconfont icon-paixing"></i>海底捞火锅</a>
              </div>
              <div class="find-comment clear">
                <span class="comment-see iconfont icon-yanjing">{{friendMes.circleSee}}</span>
                <div class="comment-mess">
                  <span class="iconfont icon-xiaoxi">{{friendMes.circleComment}}</span>
                  <span class="iconfont icon-a826" @click="addOne(index)">{{friendMes.circleLikes}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <tab></tab>
    </div>


  </div>
</template>

<script>
  import {getFriendMess} from '../api/index'
  import Tab from '../base/Tab'
  let changeCircle = [
    {"tabName": "最热", "show": "true"},
    {"tabName": "最新", "show": "false"}
  ];

  export default {
    created() {
      this.getData()
    },
    data() {
      return {
        friendCircle: [],
        changeTitile: changeCircle
      }
    },
    methods: {
      async getData() {
        this.friendCircle = await getFriendMess();
      },

      // changeOne(index) {
      //   // console.log(this);
      //   changeCircle.map((item, i) => {
      //     changeCircle[index].show = false;
      //     if (i === index) {
      //       changeCircle[index].show = true;
      //       console.log(changeCircle[index].show);
      //       i === 0 ? this.friendCircle.sort((a, b) => b["circleLikes"] - a["circleLikes"]) : this.friendCircle.sort((a, b) => b["circleTime"] - a["circleTime"]);
      //       if (i === 0) {
      //
      //       }
      //     }
      //   })
      // },

      hotRange() {
        this.friendCircle.sort((a, b) => b["circleLikes"] - a["circleLikes"])
      },
      lastestRange(){
        this.friendCircle.sort((a, b) =>{
          // console.log(b["circleTime"]);

          return b["circleTime"].replace(/:/g,"") - a["circleTime"].replace(/:/g,"")});
      },
      addOne(index){
        this.friendCircle.map((item,addindex)=>{
          if(addindex===index){
            this.friendCircle[index].circleLikes.innerHTML=Number(this.friendCircle[index].circleLikes)+1
            this.friendCircle[index].style.background="orangered"
          }
        })
      }

    },
    components: {Tab}
  }
</script>

<style scoped lang="less">
  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .clear:after {
    display: block;
    content: "";
    clear: both;
  }

  /*!*html,body{*!*/
  /*font-size: 100px;*/
  //}
  .find {
    width: 100%;
    height: 100%;
    /*font-weight: lighter;*/
    /*height: 3rem;*/
    /*广告栏*/
    .find-banner {
      width: 355px;
      height: 100px;
      border-radius: 5px;
      margin: 0 10px 10px;
      background: url("http://wx4.sinaimg.cn/orj360/b8a2fabfly1fhpb3dfj28g20dw06utua.gif") no-repeat;
      background-size: 100%;
    }
    /*导航*/
    .find-top {
      width: 100%;
      padding-bottom: 10px;
      border-bottom: 6px solid #eee;
      .find-link {
        position: relative;
        float: left;
        width: 160px; //24px
        height: 60px;
        line-height: 60px;
        text-align: right;
        border-radius: 5px;
        font-weight: lighter;
        span {
          display: inline-block;
          font-size: 16px;
          margin-right: 35px;
          color: white;
        }
        i {
          position: absolute;
          left: 10px;
          top: 5px;
          width: 50px;
          height: 50px;
          line-height: 50px;
          font-size: 40px;
          color: #fff;
          /*z-index: 10;*/
        }
      }
      .left {
        float: left;
        margin-left: 10px;
        background: -webkit-linear-gradient(right top, #CD5555, #DB7093);
        /*margin-right: 5px;*/
      }
      .right {
        float: right;
        margin-right: 10px;
        background: -webkit-linear-gradient(right top, #4682B4, #4876FF);
      }
    }
    /*朋友圈 朋友的信息*/
    .find-down {
      .find-chose {
        /*选项卡*/
        .find-part {
          width: 100%;
          border-bottom: .5px solid #eee;
          ul {
            width: 140px;
            height: 25px;
            line-height: 25px;
            margin: 0 auto;
            font-weight: lighter;
            li {
              width: 60px;
              float: left;
              /*margin-left: 30px;*/
              text-align: center;
              color: #D1D1D1;
            }
            li:hover {
              border-bottom: .5px solid palevioletred;
              color: palevioletred;
            }
          }
        }
        /*朋友圈 分享信息头*/
        .find-share {
          /*position: relative;*/
          font-size: 12px;
          padding-left: 10px;
          height: 40px;
          line-height: 40px;
          border-bottom: 5px solid #eee;
          a {
            color: #D1D1D1;
            .find-share-to {
              float: right;
              margin-right: 10px;
              /*font-size: 15px;*/
              /*background: ;*/
            }
          }
        }
      }
    }
    /*朋友圈 朋友发的信息*/
    .find-friend {
      padding: 5px 10px 0;
      ul {
        padding-bottom: 50px;
        li {
          padding-top: 15px;
          border-bottom: 3px solid #eee;
          /*padding-top: 20px;*/
          .find-friend-det {
            .friend-title {
              float: left;
              img {
                float: left;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: palevioletred;
                margin-right: 5px;
                /*width: 100%;*/
                /*border-radius: 25px;*/
              }
              .find-name {
                float: left;
                margin-left: 5px;
              }
              h5 {
                font-weight: normal;
                color: #D1D1D1;

              }
              span {
                display: inline-block;
                width: 40px;
                height: 20px;
                line-height: 20px;
                text-align: right;
                font-weight: lighter;
                font-size: 12px;
                color: deeppink;
                padding-right: 3px;
                border-radius: 8px;
                background: pink;
                i {
                  float: left;
                  font-size: 14px;
                }
              }
            }
            .find-time {
              float: right;
              font-size: 12px;
              color: #D1D1D1;
            }
          }
          .find-detail {
            border-bottom: .5px solid #eee;
            h4 {
              padding: 10px 0;
            }
            p {
              font-size: 14px;
              color: #2e2e2e;
              margin-bottom: 10px;
            }
            img {
              display: block;
              width: 350px;
              /*height:100px;*/
            }
            a {
              display: block;
              font-size: 14px;
              color: orangered;
              padding: 15px 0;
            }
          }
          .find-comment {
            height: 40px;
            line-height: 40px;
            color: #D1D1D1;
            .comment-see {
              float: left;
              font-size: 14px;
            }
            .comment-mess {
              float: right;
              span {
                margin-left: 10px;
                font-size: 14px;
              }
            }
          }
        }
      }
    }

  }

</style>
