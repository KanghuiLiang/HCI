<template>
  <v-app>
    <div id="app">
      <MNav></MNav>
      <v-container> <router-view /> </v-container>
      <MFooter />
    </div>
  </v-app>
</template>

<script>
import MNav from "./components/Nav";
import MFooter from "./components/Footer";
export default {
  name: "App",
  components: {
    MFooter,
    MNav
  }
};
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
