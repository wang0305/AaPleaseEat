<template>
  <div class="film">
    <div class="film_nav">
      <i @click="goBack" class="iconfont icon-arrow-right-copy-copy-copy"></i>
      电影
    </div>
    <ul class="film_list">
      <router-link
        tag="li"
        v-for="(item,index) in movie"
        :to="{name:'/filmFood',params:{item:item}}"
        class="film_list_item">
        <div class="item_pic"><img :src="item.filmPic" alt=""></div>
        <div class="item_content">
          <h4 class="item_title">{{item.filmName}}</h4>
          <p class="item_type">▪ {{item.filmInfo}}</p>
          <p class="item_describe">▪ {{item.filmContent}}</p>
          <p class="item_number">11个约会 | 29条饭文</p>
          <span class="item_launch">发起约会</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import {getFilm} from "../api";

  export default {
    data() {
      return {movie: [], one: []};
    },
    created() {
      this.getMovie();
    },
    methods: {
      async getMovie() {
        this.movie = await getFilm();
        this.movie = JSON.parse(this.movie);
        // console.log(this.movie);
      },
      goBack() {
        this.$router.goBack();
      },
    },
    components: {},
    computed: {}
  };
</script>

<style scoped lang="less">
  .film {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    .film_nav {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 18px;
      letter-spacing: 2px;
      color: #FF3030;
      border-bottom: 5px solid #f4f4f4;
      i {
        float: left;
        font-size: 18px;
        color: #848484;
      }
    }
    .film_list {
      width: 100%;
      list-style: none;
      background: #f4f4f4;
      height: 100%;
      .film_list_item {
        width: 100%;
        list-style: none;
        background: #fff;
        height: 150px;
        overflow: hidden;
        margin-top: 5px;
        .item_pic {
          float: left;
          width: 23%;
          height: 150px;
          padding: 15px;
          img {
            width: 100%;
            height: 80%;
            display: block;
          }
        }
        .item_content {
          width: 65%;
          height: 150px;
          padding-top: 15px;
          float: left;
          .item_title {
            font-weight: 400;
            color: #000;
            letter-spacing: 1px;
          }
          .item_type, .item_describe {
            margin: 10px;
            color: #848484;
            font-size: 13px;
            letter-spacing: 2px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item_type, .item_describe:before {

          }
          .item_number {
            height: 20px;
            width: 150px;
            line-height: 20px;
            color: #848484;
            font-size: 13px;
            margin-top: 18px;
            float: left;
          }
          .item_launch {
            width: 70px;
            height: 27px;
            line-height: 27px;
            text-align: center;
            color: #FF3030;
            float: left;
            margin: 10px 0 0 15px;
            font-size: 13px;
            border: 1px solid #FF3030;
            border-radius: 5px;
          }
        }
      }
    }
  }
</style>
