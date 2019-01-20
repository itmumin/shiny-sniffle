<template>
  <div>
    <mt-swipe :auto="3000">
      <mt-swipe-item>
        <img src="../../images/1.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/2.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/3.jpg" alt>
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-extra mui-icon-extra-share"></span>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-extra mui-icon-extra-comment"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-extra mui-icon-extra-classroom"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-extra mui-icon-extra-custom"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  created() {
    // this.getLunBo();
  },
  methods: {
    // getLunBo() {
    //   // 没有对应的后端连接
    //   this.$http.get("./newslist.json").then(res => {
    //     console.log(res);
    //   });
    // }
  }
};
</script>

<style lang="less" scoped>
div.mint-swipe {
  width: 100%;
  height: 250px;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mui-table-view {
  background-color: #fff;
  .mui-table-view-cell {
    width: 33%;
    border: 0;
    div.mui-media-body {
      font-size: 13px;
    }
    &:nth-of-type(1) {
      &:hover {
        background: #eee;
        border-radius: 50%;
        span {
          color: pink;
        }
      }
    }
    &:nth-of-type(2) {
      span {
        color: green;
      }
    }
    &:nth-of-type(3) {
      span {
        color: red;
      }
    }
    &:nth-of-type(4) {
      span {
        color: #ccc;
      }
    }
    &:nth-of-type(5) {
      span {
        color: #000;
      }
    }
  }
}
</style>
