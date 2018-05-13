<template>
  <div class="home_list">
    <ul class="list_list">

      <li v-for="(item,index) in list"
      class="list_item" @click="goDetail(item.messageId)">
        <!--:to="{path:'/detail',params:{id:item.userId}}"-->
        <!--tag="li"-->

        <div class="itemTop">
          <img :src="item.userCover" alt="">
          <div class="list_name">{{item.username}}</div>
          <span class="one">
              <i class="iconfont icon-nansheng"></i>
              {{item.userAge}}
            </span>
          <span class="two">
              <i class="iconfont icon-aixinchupin"></i>
              {{item.userCredit}}
            </span>
        </div>
        <div class="itemContent">
          <b>{{item.userInfo}}</b>
          <p class="itemContentP"><i class="iconfont icon-canju"></i>{{item.dataPlace}}</p>
          <p class="itemContentDate"><i class="iconfont icon-dingshi"></i>{{item.userTime}}</p>
        </div>
        <div class="itemComment">
          <p><i class="iconfont icon-yanjing"></i>66</p>
          <p><i class="iconfont icon-xiaoxi"></i>{{item.userComment.length}}</p>
          <p><i class="iconfont icon-icon-test1"></i>5</p>
          <p><i class="iconfont icon-xihuan1"></i>66</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getList} from "../api";

  export default {
    data() {
      return {list:[]}
    },
    created(){
      this.getMsgList()
    },
    methods: {
      async getMsgList(){
        this.list=await getList();
      },
      goDetail(id){
        this.$router.push(`/detail/${id}`)
      }
    },
    components: {},
    computed: {}
  }
</script>

<style scoped lang="less">
  .home_list {
    .list_list {
      .list_item {
        background: #fff;
        margin-top: 5px;
        .itemTop {
          width: 100%;
          height: 100px;
          box-sizing: border-box;
          padding: 10px;
          background: #fff;
          border-bottom: 1px solid lavender;
          img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            display: block;
            float: left;
          }
          .list_name {
            height: 40px;
            line-height: 40px;
            margin-left: 90px;
          }
          span {
            margin-left: 10px;
            width: 65px;
            height: 20px;
            display: block;
            line-height: 20px;
            text-align: center;
            border-radius: 10px;
            float: left;
          }
          .one {
            background: lightcyan;
            i {
              color: lavender;
            }
          }
          .two {
            background: lightpink;
            color: red;
          }
        }
        .itemContent {
          box-sizing: border-box;
          padding: 10px;
          border-bottom: 1px solid lavender;
          b {
            letter-spacing: 2px;
            font-weight: 500;
          }
          .itemContentP {
            margin-top: 5px;
            color: lightslategrey;
            i {
              margin-right: 10px;
              color: red;
            }
          }
          .itemContentDate {
            margin-top: 5px;
            color: silver;
            i {
              margin-right: 10px;
              color: silver;
            }
          }
        }
        .itemComment {
          width: 100%;
          height: 30px;
          line-height: 30px;
          box-sizing: border-box;
          /*padding: 10px;*/
          padding-left: 10px;
          padding-right: 10px;
          p {
            float: left;
            padding-left: 10px;
            vertical-align: center;
            color: silver;
            i {
              margin-right: 2px;
            }
          }
          p:last-child {
            float: right;
          }
        }
      }
    }
  }
</style>
