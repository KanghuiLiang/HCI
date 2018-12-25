<template>
  <div class="about">
    <div
      :style="{
        'background-image': 'url(' + require('@/assets/kids-nature1.jpg') + ')'
      }"
      class="background-img"
    ></div>
  </div>
</template>

<style scoped>
.background-img {
  transform: translateY(-60px);
  display: table;
  height: 100%;
  width: 100%;
  position: relative;
  background-size: cover;
}
</style>
