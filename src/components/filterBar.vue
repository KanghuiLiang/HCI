<template>
  <div id="app">
    <v-container fluid class="container">
      <h1>CATEGORY</h1>
      <hr>
      <v-layout row wrap>

      </v-layout>
      <br />
      <!--Date End section-->

      <v-layout row wrap>
        <v-flex>
        </v-flex>
      </v-layout>
      <br />
      <!--Select section-->
      <v-layout>
        <v-flex> <v-select :items="ages" label="Age Range"></v-select> </v-flex>
      </v-layout>

      <br />

      <!--Tree View-->
      <v-layout>
        <v-flex>
          <label>Theme</label>
          <v-treeview :items="items"> </v-treeview>
        </v-flex>
      </v-layout>

      <br />
      <hr>

      <timeChoose/>
    </v-container>
  </div>
</template>

<script>
  import timeChoose from '../components/TimeSlider.vue';
export default {
  name: "filterBar",
    components: {timeChoose},
  data: () => ({

    search: "",
    people: ["Indoor"],
    ages: ["8 - 12months", "2 - 4years", "5 - 8years"],
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,

    //    tree view items
    items: [
      {
        id: 1,
        name: "Life Skills",
        children: [
          { id: 2, name: "Animal CARE" },
          { id: 3, name: "Gardening" },
          { id: 4, name: "Storytelling" },
          { id: 5, name: "Camping" }
        ]
      },
      {
        id: 6,
        name: "Art",
        children: [
          {
            id: 7,
            name: "Film",
            children: [
              {
                id: 8,
                name: "Animation",
                children: [
                  { id: 9, name: "Cartoon" },
                  { id: 10, name: "bootstrap : ts" }
                ]
              }
            ]
          },
          {
            id: 11,
            name: "Picture",
            children: [
              {
                id: 12,
                name: "src :",
                children: [
                  { id: 13, name: "v-btn : ts" },
                  { id: 14, name: "v-card : ts" },
                  { id: 15, name: "v-window : ts" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 16,
        name: "Sports",
        children: [
          { id: 17, name: "BaseBall" },
          { id: 18, name: "Golf" },
          { id: 19, name: "Soccer" }
        ]
      }
    ]
  })
};
</script>

<style scoped>
  h1{
    font-size: 50px;
    margin: 20px auto;
    text-align: center;
  }
</style>
