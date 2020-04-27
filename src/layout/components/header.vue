<template>
  <header id="header">
    <div class="back" @click="back">《</div>
    <div style="flex:1"></div>
  </header>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style lang='scss'>
#header {
  height: 40px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: #fff;
  .back{
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #aaa;
  }
}
</style>
