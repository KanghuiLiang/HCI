<template>
  <div id="app">
    <h2>Filter Bar</h2>
    <v-container fluid class="container">
      <!--instructor input-->
      <v-layout>
        <v-flex>
          <div class="search-wrapper">
            <label>Search Instructor Name: </label>
            <input type="text" v-model="search" placeholder="Type..."/>
          </div>
        </v-flex>
      </v-layout>
      <br>
      <!--Tree View-->
      <v-layout>
        <v-flex>
          <label>Categories</label>
          <v-treeview :items="items"></v-treeview>
        </v-flex>
      </v-layout>

      <br>
      <v-layout row wrap>
        <v-flex>
          <v-menu
            ref="menu"
            :close-on-content-click="false"
            v-model="menu"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="date"
              label="Date"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>

      <br>
      <!--Select section-->
      <v-layout>
        <v-flex> <v-select :items="ages" label="Age Range"></v-select> </v-flex>
      </v-layout>

      <br>
      <!--Checkbox section-->
      <v-layout>
        <v-flex>
          <p>Location</p>
          <v-switch v-model="people" label="Indoor" value="Indoor"></v-switch>
          <v-switch v-model="people" label="Outdoor" value="Outdoor"></v-switch>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "filterBar",
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
      },
    ]
  })
};
</script>

<style scoped>

  .container {
    border: solid;
  }

input {
  padding: 4px 12px;
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: 0.15s all ease-in-out;
  background: white;
}
</style>
