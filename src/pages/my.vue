<template>
  <div class="wrap">
    <div class="content1">
      <van-image round width="10rem" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <div class="content2">
      <van-grid clickable :column-num="2" gutter="20">
        <van-grid-item icon-size="35px" icon="home-o" text="我发布的" to="/" />
        <van-grid-item icon-size="35px" icon="search" text="我卖出的" url="/vant/mobile.html" />
        <van-grid-item icon-size="35px" icon="search" text="我买到的" url="/vant/mobile.html" />
        <van-grid-item icon-size="35px" icon="search" text="我收藏的" url="/vant/mobile.html" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.content1 {
  background-color: blue;
}
</style>