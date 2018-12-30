<template>
  <div>
    <v-app>
      <div
        :style="{
          'background-image': 'url(' + require('@/assets/landing.jpg') + ')'
        }"
        class="background-img"
      >
        <div class="greeting">
          <h1>STEM</h1>
          <h3>Knowledge is Treasure</h3>
          <div class="scrollArrow"></div>
          <div class="overlay"></div>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "section1"
};
</script>

<style scoped>
.background-img {
  transform: translateY(-60px);
  display: table;
  height: 100%;
  width: 100%;
  position: relative;
  background-size: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1c2027;
  opacity: 0.4;
  z-index: 5;
}

.greeting {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  position: relative;
  z-index: 10;
}
.greeting h1 {
  color: #fff;
  font-size: 500%;
  font-weight: bold;
  position: relative;
  z-index: 10;
}
.greeting h3 {
  color: #fff;
  position: relative;
  z-index: 10;
}

.scrollArrow {
  position: absolute;
  z-index: 100;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-left: 3px solid #fff;
  border-bottom: 3px solid #fff;
  transform: rotate(-45deg);
  animation: scrollDown 1.3s ease-in-out infinite;
}
@keyframes scrollDown {
  0% {
    top: 80%;
  }
  40% {
    top: 82%;
    100% {
      top: 80%;
    }
  }
}
</style>
