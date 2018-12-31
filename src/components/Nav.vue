<template>
  <div class="container-fluid">
    <div style="position:fixed" class="Nav">
      <v-toolbar>
        <v-toolbar-items>
          <v-btn
            flat
            v-for="route in $router.options.routes"
            :key="route.path"
            md1
            xs12
            class="a"
          >
            <router-link :to="route.path" class="a"
              >{{ route.name }}
            </router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
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
