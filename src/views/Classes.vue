<template>
  <div class="classes">

      <v-layout row wrap>
        <v-flex xs12 md3> <filterBar /> </v-flex>
        <!--<v-flex xs12 md9> <searchClass /> </v-flex>-->
        <hr>
        <v-flex xs12 md8> <classShow /> </v-flex>

      </v-layout>
  </div>
</template>

<script>
// import searchClass from "../components/searchClass.vue";
import filterBar from "../components/filterBar.vue";
import classShow from "../components/classShow.vue";

export default {
  name: "classesResult",
  components: { classShow, filterBar }
};
</script>

<style scoped>

</style>
