<template>
  <div class="header">
    <!-- 顶部 header -->
    <mt-header fixed title="itmumin"></mt-header>


    <!-- 中间路由区 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <div class="footer">
         <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="member" class="mui-tab-item">
        <span class="mui-icon mui-icon-person-filled">
        </span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="shopcar" class="mui-tab-item">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="search" class="mui-tab-item">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.header {
  .content {
    margin-top: 40px;
  }
}
</style>
