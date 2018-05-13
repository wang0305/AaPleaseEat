<template>
  <div class="full-screen">
    <div class="header">
      <i class="back iconfont icon-fanhui" @click="goback"></i>
      <p>正在约会</p>
      <i class="share iconfont icon-sangedian"></i>
    </div>
    <div class="roll-area">
      <div class="message-area">
        <div class="founder">
          <span class="founderCover"><img :src="totalInfo.userCover" alt=""></span>
          <div>
            <h3>{{totalInfo.username}}</h3>
            <span class="first"><i class="iconfont icon-nansheng" v-if="totalInfo.userSex==='男'"></i>
              <i class="iconfont icon-nvxing" v-if="totalInfo.userSex==='女'"></i>
              {{totalInfo.userAge}}</span>
            <span class="two"><i class="iconfont icon-icon-test1"></i>{{totalInfo.userCredit}}</span>
          </div>

          <i class="liuyan iconfont icon-liuyan"></i>
        </div>
        <p class="text">{{totalInfo.userInfo}}</p>
        <span class="location">
          <i class="iconfont icon-canju"></i>
          <p class="rest-name">{{totalInfo.dataPlace}}</p>
          <p class="rest-location">通州区34.0km</p>
        </span>
        <div class="demand">
          <span><i class="iconfont icon-icon-test"></i>不限男女</span>
          <span><i class="iconfont icon-bianji"></i>喜欢运动</span>
          <span><i class="iconfont icon-dingshi1"></i>{{totalInfo.userTime}}</span>
        </div>
        <div class="bottom">
          <span class="read"><i class="iconfont icon-yanjing"></i>110</span>
          <span class="people"><i class="iconfont icon-icon-test1"></i>0</span>
          <span class="favor"><i class="iconfont icon-xihuan2"></i>0</span>
        </div>

      </div>
      <comments :comments="totalInfo.userComment"></comments>

    </div>
    <myFooter :messageId="id" :getLists="getLists"></myFooter>
  </div>
</template>

<script>
  import {getList} from "../../api";
  import comments from './comments'
  import myFooter from './footer'
  export default {
    data(){
      return {
        messageId:1,
        totalInfo:[]
      }
    },
    created(){
      // this.get()
      // console.log(this.$router);
      this.getLists()
      // console.log(this.id);

    },
    methods:{
      // get(){
      // },
      addComment(data){
        this.totalInfo.userComment.push(data)
      },
      async getLists(){
        this.totalInfo=await getList()
        this.totalInfo=this.totalInfo.find((item)=>item.messageId==this.id
        )
        console.log(this.totalInfo);
        // console.log(this.totalInfo.userComment);
      },
      goback(){
        this.$router.history.go(-1)
      }
    },
    components:{
      comments,myFooter
    },
    name: "detail",
    computed:{
      id(){
        return this.$route.params.id
      }
    },

  }
</script>

<style scoped lang="less">
  .header{
    position: fixed;
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 5px solid #e6e8ea;
    .back{
      font-size: 20px;
      margin-left: 10px;
    }
    .share{
      font-size: 20px;
      margin-right: 10px;
    }
    p{
      font-size: 20px;
    }
  }
  .roll-area{
    width: 100%;
    position: fixed;
    top: 45px;
    bottom: 60px;
    /*background: pink;*/
    overflow: scroll;
    .message-area{
      background: white;
      border-bottom: 5px solid #e6e8ea;
      .founder{
        display: flex;
        justify-content: start;
        height: 60px;
        padding:20px 20px 10px 20px;
        .founderCover{
          display: block;
          background: blanchedalmond;
          width: 50px;
          height: 50px;
          overflow: hidden;
          border-radius: 50%;
          img{
            width: 100%;
          }

        }
        div{
          margin-left: 20px;
          overflow: hidden;
          h3{
            width: 100%;
            font-size: 20px;
            line-height: 30px;
            color: darkgray;
            font-weight: 300;
          }
          span{
            width: 65px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            border-radius: 10px;
            display: block;
            float: left;
            margin-left: 10px;
          }
          .first{
            background: lightcyan;
              color: lavender;
          }
          .two{
            background: lightpink;
            color: red;
          }
        }
        .liuyan{
          color: red;
          font-size: 30px;
          position: absolute;
          right: 10px;
          margin-top: 5px;
        }
      }
      .text{
        padding-left: 20px;
        font-size: 18px;
        letter-spacing: 1px;
        font-weight: 500;
      }
      .location{
        display: flex;
        justify-content: start;
        padding: 0 20px;
        border-top: 1px solid #e6e8ea;
        border-bottom: 1px solid #e6e8ea;
        line-height: 30px;
        i{
          color: pink;
          margin-right: 10px;
        }

        /*i{*/
          /*color: pink;*/
        /*}*/
        .rest-name{

        }
        .rest-location{
          position: absolute;
          right: 10px;
        }

      }
      .demand{
        padding: 10px 20px;
        border-bottom: 1px solid #e6e8ea;
        span{
          display: block;
          line-height: 30px;
          color: silver;
          i{
            margin-right: 10px;
          }
        }
      }
      .bottom{
        display: flex;
        justify-content: start;
        padding: 0 20px;
        line-height: 30px;
        color: silver;
        i{
          margin-right: 5px;
        }
        .people{
          margin-left: 10px;
        }
        .favor{
          position: absolute;
          right: 20px;
        }

      }
    }
  }


</style>
