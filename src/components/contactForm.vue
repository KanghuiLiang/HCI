<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <!--from-->
        <v-flex xs12 md6>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="10"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="ZipCode"
              :rules="CodeRules"
              label="Zipcode"
              required
            ></v-text-field>

            <v-textarea
              name="input-7-1"
              label="Message"
              value="Leave Your Message"
              hint="Contact Us"
            ></v-textarea>

            <v-btn :disabled="!valid" @click="submit"> submit </v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-form>
        </v-flex>
        <!--img-->
        <v-flex xs12 md6>
          <v-card flat tile>
            <v-img src="./assets/st-rama9-campus.png"> </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "contactform",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 20) || "Name must be less than 20 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    ZipCode: "",
    CodeRules: [v => !!v || "ZipCode is required"]
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,
          email: this.email
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped></style>
