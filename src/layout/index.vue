<template>
  <div id="layout">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/footer";
import Header from "./components/header";
export default {
  components: {
    Footer,
    Header
  }
};
</script>

<style lang='scss'>
#layout {
  padding: 50px 0;
  header {
    height: 50px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
  footer {
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-top: 1px solid black;
    z-index: 2;
  }
}
</style>
