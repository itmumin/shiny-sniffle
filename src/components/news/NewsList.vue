<template>
  <div class="newslist-container">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in msg" v-bind:key="item.id">
        <router-link :to="'/home/newslist/' + item.id">
          <img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span>点击时间： {{ item.add_time | dateFormat }}</span>
              <span>点击： {{ item.click }} 次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import { Toast } from 'mint-ui'
export default {
  data() {
    return {
        msg: []
    };
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http
        .get("http://localhost:81/src/lib/data/news/newslist.json")
        .then(data => {
          if(data.body.status == 0) {
              this.msg = data.body.message
          }
        }, err => {
            Toast('获取新闻列表失败')
        });
    }
  }
};
</script>

<style lang="less" scoped>
ul.mui-table-view {

  h1 {
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .mui-ellipsis {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
