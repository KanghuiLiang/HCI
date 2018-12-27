<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 md6> <form /> </v-flex>
    </v-layout>
  </div>
</template>

<script>
import form from "../components/contactForm.vue";
export default {
  name: "contact",
  components: { form }
};
</script>
