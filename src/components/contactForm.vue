<template>
  <div>
    <v-container fluid>
      <v-layout row wrap>
        <!--from-->
        <v-flex xs12 md6>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="20"
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

            <v-btn :disabled="!valid" @click="submit"> SEND </v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-form>
        </v-flex>
        <!--img-->
        <v-flex xs12 md6>
          <v-card flat tile class="img">
            <v-img :src="require('@/assets/st-rama9-campus.png')"> </v-img>
            <br />
            <div class="infom">
              <p>
                Address: 16 ถนน มอเตอร์เวย์ ก.ม. 2 Khwaeng Prawet,<br />
                Khet Prawet, Bangkok 10250
              </p>
              <p>
                Email: info@gmail.com <br />
                Phone: 888-888
              </p>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-1"
                icon
                id="button"
              >
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </div>
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
    CodeRules: [v => !!v || "ZipCode is required"],

    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
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

<style scoped>
.img {
  margin-left: 50px;
}
.infom {
  font-weight: bold;
  text-align: left;
}
#button {
  color: deepskyblue;
}
</style>
