<template>
  <div class="comments">
    <div class="header">评论{{comments.length}}</div>
    <ul>
      <li class="lists" v-for="comment in comments">
        <span class="cover"><img :src="comment.commentCover" alt=""></span>
        <div class="content">
          <h3 class="name">{{comment.commentName}}</h3>
          <p class="info">{{comment.commentInfo}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "comments",
    props: ['comments'],
    data() {
      return {
        rightTime: 0
      }
    },
    created() {
      // getCommentTime()
    },
    methods: {
      getCommentTime() {
        let time = new Date()
        console.log(time);
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    padding: 10px 20px;
    border-bottom: 1px solid #e6e8ea;
  }

  .lists {
    display: flex;
    justify-content: start;
    border-bottom: 1px solid #e6e8ea;
    padding: 10px 0;
    padding-left: 20px;
    position: relative;
    .cover {
      display: block;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;
      img {
        height: 100%;
      }

    }
    .content {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .name {
        font-size: 16px;
        letter-spacing: 2px;
        color: #969696;
      }
      .info {
        font-size: 18px;
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .right {
      position: absolute;
      right: 10px;
      height: 100%;
      .iconfont {
        position: absolute;
        bottom: 10px;
        right: 3px;
      }
    }
  }

</style>
