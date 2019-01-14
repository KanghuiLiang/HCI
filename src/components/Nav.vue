<template>
  <div class="container-fluid">
    <v-layout row wrap>
      <div style="position:fixed" class="Nav">
        <v-toolbar>
          <v-toolbar-side-icon
            @click.stop="drawer = !drawer"
          ></v-toolbar-side-icon>
          <h1><i class="fab fa-modx" style="color:#5bc0af"></i>STEAM</h1>
          <v-toolbar-items :active.sync="activeBtn" xs12 md10>
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

            <v-btn md2 xs12 color="#5bc0af">LOG IN</v-btn>
            <v-btn md1 xs12 color="error">SIGN UP</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </div>
    </v-layout>

    <!--drawer-->
    <!--<v-layout wrap>-->
      <!--<v-navigation-drawer v-model="drawer" absolute>-->
        <!--<v-list class="pa-1">-->
          <!--<v-list-tile avatar>-->
            <!--<v-list-tile-avatar>-->
              <!--<img src="https://randomuser.me/api/portraits/men/85.jpg" />-->
            <!--</v-list-tile-avatar>-->

            <!--<v-list-tile-content>-->
              <!--<v-list-tile-title>John Leider</v-list-tile-title>-->
            <!--</v-list-tile-content>-->
          <!--</v-list-tile>-->
        <!--</v-list>-->

        <!--<v-list class="pt-0" dense>-->
          <!--<v-divider></v-divider>-->

          <!--<v-list-tile v-for="item in items" :key="item.title" @click="">-->
            <!--<v-list-tile-action>-->
              <!--<v-icon>{{ item.icon }}</v-icon>-->
            <!--</v-list-tile-action>-->

            <!--<v-list-tile-content>-->
              <!--<v-list-tile-title>{{ item.title }}</v-list-tile-title>-->
            <!--</v-list-tile-content>-->
          <!--</v-list-tile>-->
        <!--</v-list>-->
      <!--</v-navigation-drawer>-->
    <!--</v-layout>-->
  </div>
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({ components: {} })
export default class Nav extends Vue {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    };
  }
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
