<template>
  <div class="home">
    <v-content>
    <section1 />
    <div class="container-fluid fullScreen"><section2 /></div>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import section1 from "../components/home/section1.vue";
import section2 from "../components/home/section2.vue";

@Component({
  components: {
    section1,
    section2
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
.fullScreen {
  margin: 0px;
  padding: 0px;
}
</style>
