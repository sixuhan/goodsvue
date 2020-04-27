<template>
  <div class="content">
    <div class="search">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <van-button type="primary" block color="blue" plain="true">分类</van-button>
    <div>
      <van-grid :column-num="3">
        <van-grid-item v-for="value in 30" :key="value" icon="photo-o" text="文字" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>