<template>
  <div>
    <v-container>
      <div
        :style="{
          'background-image': 'url(' + require('@/assets/kids.jpg') + ')'
        }"
        class="image"
      >
        <div class="overlay"><div class="about">ABOUT STEM</div></div>
      </div>
      <v-spacer></v-spacer>
      <wedo /> <team /> <mission></mission>
    </v-container>
  </div>
</template>

<script>
import wedo from "@/components/AboutPage/WhatWeDo.vue";
import team from "@/components/AboutPage/OurTeam.vue";
import mission from "@/components/AboutPage/Mission.vue";
export default {
  name: "about",
  components: { wedo, team, mission }
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
  opacity: 0.7;
}
</style>
