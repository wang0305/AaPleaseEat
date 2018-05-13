<template>
<div class="content">
  <div class="leftBox">
    <i class="iconfont icon-icon-test"></i>
    <h3>参加</h3>
  </div>
  <div class="rightBox" @click="show">
    <i class="iconfont icon-liuyan"></i>
    <h3>评论</h3>
  </div>
  <div class="comment" v-if="flag">
    <div>
      <input type="text" v-model="comment.commentInfo">
      <button @click="sentComment">发送</button>
    </div>
  </div>
</div>
</template>

<script>
  import {sentComment} from "../../api";

  export default {
        name: "myFooter",
      props:['messageId','getLists'],
      methods:{
        show(){
          this.flag=!this.flag
        },
        async sentComment(){
          // console.log(this.messageId,'asdg');
          // console.log(this.comment,'asfhsdh');
          await sentComment(this.messageId,this.comment);
          // console.log(newComment);
          this.getLists()
          this.comment.commentInfo=''
          this.flag=false
        }
      },
      data(){
          return{
            flag:false,
            comment:{
              "commentName": "喔喔",
              "commentCover": "http://tx.haiqq.com/uploads/allimg/160812/102GJ358-9.jpg",
              "commentTime": "昨天 15:03",
              "commentId": 1
            }
          }
      }
    }
</script>

<style scoped lang="less">
  .content{
    position: fixed;
    width: 100%;
    height: 60px;
    bottom: 0;
    background: -webkit-linear-gradient(left,#fa536f,#FF8C69,#FF8247);
    /*padding: 20px 0;*/
    display: flex;
    justify-content: start;
    align-items: center;
    .leftBox{
      i{
        font-size: 30px;
        margin-right: 5px;
      }

      /*position: absolute;*/
      /*left: 0;*/
      display: flex;
      justify-content: center;
      line-height: 20px;
      width: 50%;
      border-right: 1px solid #e6e8ea;
    }
    .rightBox{
      /*position: absolute;*/
      /*right: 0;*/
      i{
        font-size: 30px;
        margin-right: 5px;
      }
      width: 49%;
      display: flex;
      justify-content: center;
      text-align: center;
      line-height: 20px;
    }
  }
  .comment{
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #e6e8ea;
    padding: 10px;

    div{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      input{
        border: none;
        width: 80%;
        height: 40px;
      }
      button{
        margin-top: 0;
        height: 40px;
        width: 60px;
        font-size: 18px;
        text-align: center;
        color: white;
        background: #fc3182;
        border: none;
      }

    }
  }

</style>
