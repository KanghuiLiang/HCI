<template>
  <div>
    <v-container>
      <h1>Contact Us</h1>
      <contactform />
    </v-container>
  </div>
</template>

<script>
import contactform from "../components/contactForm.vue";
export default {
  name: "contact",
  components: { contactform }
};
</script>

<style scoped>
h1 {
  font-size: 48px;
}
</style>
