<template>
  <div id="app">
      <!-- <Nabrar></Nabrar> -->
    <!-- <LoadingScreen v-show="isLoading" ></LoadingScreen> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
    </div> -->

    <router-view />
  </div>
</template>

<script>
// import Nabrar from "@/components/Navbar.vue";
export default {
  data() {
    return {
      isLoading: true,
      isProjectModalVisible: false,
    };
  },
  components: {
    // Nabrar,
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>

<style lang="less">
// body{
//     overflow: hidden;
// }

@main-color: #1e1e1e;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<style src="./assets/styles/css/style.css" />
