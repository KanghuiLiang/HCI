<template>
  <div>
    <div class="skewedR">
      <div class="row rSkewed">
        <div class="col-md-6 ">
          <div class="video embed-responsive embed-responsive-16by9">
            <!--<video controls>-->
            <!--<source src="../vid/STEM_ads.mp4" type="video/mp4" />-->
            <!--<track-->
            <!--src="~@/vid/STEM_ads.vtt"-->
            <!--kind="subtitles"-->
            <!--srclang="en"-->
            <!--label="English"-->
            <!--/>-->
            <!--</video>-->
          </div>
        </div>
        <div class="col-md-6">
          <div class="descr">
            <h1>STEM ADS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              iste, ullam enim non ex. Eligendi ipsum, neque minus ut rem
              impedit iure eos, veniam quas voluptates accusantium, sapiente
              quibusdam, quaerat nesciunt necessitatibus accusamus modi
              cupiditate dicta maxime! Fuga quod, dolorem doloremque.
            </p>
            <button class="btn btn-success" type="button" name="button">
              Find a class near you
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section2"
};
</script>

<style scoped>
.skewedR {
  position: relative;
  z-index: -1;
  background: #f4f4f5;
  /* opacity: .5; */
  padding: 80px 0;
  transform: skew(0deg, -10deg) translateY(-200px);
}

.rSkewed {
  /* padding: 150px 200px; */
  margin-top: 70px;
  padding: 10px;
  transform: skew(0deg, 10deg);
}
.descr {
  padding-top: 50px;
  padding: 50px;
}
</style>
