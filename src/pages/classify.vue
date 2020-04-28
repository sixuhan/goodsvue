<template>
  <div>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="百度"  url="http://www.baidu.com"/>
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
    </van-sidebar>
  </div>
</template>

<script>
export default {
     data() {
    return {
      activeKey: 0,
    };
  },
};
</script>

<style>
</style>