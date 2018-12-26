<template>
  <div>
    <v-app>
      <div
        :style="{
          'background-image': 'url(' + require('@/assets/happykids.jpeg') + ')'
        }"
        class="image"
      >
        <div class="overlay"><div class="about">ABOUT STEM</div></div>
      </div>
      <v-spacer></v-spacer>
      <wedo /> <team />
    </v-app>
  </div>
</template>

<script>
import wedo from "@/components/AboutPage/WhatWeDo.vue";
import team from "@/components/AboutPage/OurTeam.vue";
export default {
  name: "about",
  components: { wedo, team }
};
</script>
<style>
.image {
  width: 100%;
  background: center;
  background-size: cover;
}
.about {
  font-size: 120px;
  font-weight: bold;
  color: #c0c0c0;
  padding: 100px;
}
.overlay {
  background: #1c2027;
  opacity: 0.4;
}
</style>
