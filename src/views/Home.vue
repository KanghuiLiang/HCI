<template>
  <div class="home"><section1 /><section2 /></div>
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

<style scoped></style>
