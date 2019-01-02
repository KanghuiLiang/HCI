<template>
  <div class="classes">
    <v-container>
      <h1>Find A Class</h1>
      <v-layout row wrap>
        <v-flex xs12 md3> <filterBar /> </v-flex>
        <v-flex xs12 md9> <searchClass /> </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import searchClass from "../components/searchClass.vue";
import filterBar from "../components/filterBar.vue";

export default {
  name: "classesResult",
  components: { searchClass, filterBar }
};
</script>

<style scoped>
h1 {
  margin: 20px auto;
  text-align: center;
  color: #5bc0af;
}
</style>
