<template>
  <div class="comment-container">
    <h2>发表评论</h2>
    <hr>
    <input type="text" placeholder="请输入评论内容(最多1个字)">
    <mt-button size="large" type="primary">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">1楼：匿名用户&nbsp;&nbsp;&nbsp;&nbsp;发表时间：2012-02-02 12：12：21</div>
        <div class="cmt-body">锄禾日当午，再见</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">1楼：匿名用户&nbsp;&nbsp;&nbsp;&nbsp;发表时间：2012-02-02 12：12：21</div>
        <div class="cmt-body">锄禾日当午，再见</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">1楼：匿名用户&nbsp;&nbsp;&nbsp;&nbsp;发表时间：2012-02-02 12：12：21</div>
        <div class="cmt-body">锄禾日当午，再见</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">1楼：匿名用户&nbsp;&nbsp;&nbsp;&nbsp;发表时间：2012-02-02 12：12：21</div>
        <div class="cmt-body">锄禾日当午，再见</div>
      </div>
    </div>
    <mt-button size="large" type="danger" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.comment-container {
  padding: 10px 2px;
  h2 {
    font-size: 16px;
  }
  input {
    font-size: 14px;
  }
  .cmt-item {
    margin: 10px 0;
    border: 1px solid #ccc;
    .cmt-title,
    .cmt-body {
      font-size: 12px;
    }
  }
}
</style>
