<template>
  <div class="container-fluid">
    <v-layout row wrap>
      <div style="position:fixed" class="Nav">
        <v-toolbar>
          <v-spacer></v-spacer>
          <h1><i class="fab fa-modx"></i> &nbsp;&nbsp;&nbsp;STEAM</h1>
          <v-spacer></v-spacer>

          <v-toolbar-items xs12 md10>
            <!--Home-->
            <v-btn flat md1 xs12 class="a">
              <router-link to="/" class="a"> Home </router-link>
            </v-btn>

            <!--Find Class-->

            <v-btn flat md1 xs12 class="a">
              <router-link to="/find-A-Class" class="a">
                FIND A CLASS
              </router-link>
            </v-btn>

            <!--Be a coach-->
            <v-btn flat md1 xs12 class="a">
              <router-link to="/be-A-Coach" class="a"> BE A COACH </router-link>
            </v-btn>

            <!--Blog-->
            <v-btn flat md1 xs12 class="a">
              <router-link to="/blog" class="a"> BLOG </router-link>
            </v-btn>

            <!--about us-->
            <v-btn flat md1 xs12 class="a">
              <router-link to="/about-us" class="a"> ABOUT US </router-link>
            </v-btn>

            <!--Contact us -->

            <v-btn flat md1 xs12 class="a">
              <router-link to="/contact-us" class="a"> CONTACT US </router-link>
            </v-btn>

              <v-btn md2 xs12 color="success">LOG IN</v-btn>
              <v-btn md1 xs12 color="error">SIGN UP</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </div>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({ components: {} })
export default class Nav extends Vue {
  @Prop() exampleProperty!: string;
  // name: "MNav";
}
</script>

<style scoped>
.container-fluid {
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-bottom: 30px;
}

.Nav {
  background-color: white;
  position: fixed;
  width: 100%;
  left: 0;
  line-height: 400%;
  z-index: 1;
  text-align: center;
}
.a {
  color: black;
  padding: 0 20px;
  text-decoration: none;
  position: relative;
  text-decoration: none;
}
.a:hover {
  text-decoration: none;
}
</style>
