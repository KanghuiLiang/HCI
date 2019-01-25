<template>
  <div id="app">
    <v-container fluid class="container">
      <h2><i class="fas fa-filter"></i>Filter</h2>
      <v-divider></v-divider>
      Search:
      <v-layout row wrap>
        <b-form-input
          id="input-default"
          type="text"
          placeholder="Type in location, zipcode, or instructor.."
          class="searchtest"
        ></b-form-input>
      </v-layout>
      <br />

      <!--Select Date-->
      Date:

      <!--<v-layout row wrap>-->
        <!--<b-form inline>-->
          <!--<b-input-->
            <!--class="mb-9 mr-sm-2 mb-sm-0"-->
            <!--type="date"-->
            <!--id="inlineFormInputName2"-->
            <!--placeholder="Jane Doe"-->
          <!--/>-->
          <!--<b-input-->
            <!--class="mb-9 mr-sm-2 mb-sm-0"-->
            <!--type="date"-->
            <!--id="inlineFormInputName2"-->
            <!--placeholder="Jane Doe"-->
          <!--/>-->
        <!--</b-form>-->
      <!--</v-layout>-->
      <v-layout row wrap>
      <v-flex xs12 sm6 md6>
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
                  label="From"
                  prepend-icon="event"
                  readonly
          ></v-text-field>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex>

      <v-flex xs12 sm6 md6>
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
                  label="To"
                  prepend-icon="event"
                  readonly
          ></v-text-field>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex>
      </v-layout>
      <br />
      <!--Date End section-->

      Time:
      <v-layout row wrap>
        <v-flex>
          <v-card-text>

            <v-range-slider v-model="value1"></v-range-slider>
            From 8:30 To 16:30
          </v-card-text>
        </v-flex>
      </v-layout>

      <br />
      <!--Date End section-->

      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn
              block
              href="#"
              v-b-toggle.accordion1
              variant="Secondary"
              class=""
              >Age Range</b-btn
            >
          </b-card-header>
          <b-collapse
            id="accordion1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <v-layout row wrap>
                <v-flex xs6 v-for="(age, index) in ages" :key="'age' + index">
                  <v-checkbox
                    v-model="selected"
                    v-bind:label="age"
                    v-bind:value="age"
                  ></v-checkbox>
                </v-flex>
              </v-layout>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>

      <br />Theme:
      <v-layout>
        <v-flex>
          <v-card-text>
            <v-treeview
              v-model="tree"
              :load-children="fetch"
              :items="items"
              activatable
              active-class="grey lighten-4 indigo--text"
              selected-color="indigo"
              open-on-click
              selectable
              expand-icon="mdi-chevron-down"
              on-icon="mdi-checkbox-marked"
              off-icon=" mdi-checkbox-blank-outline"
              indeterminate-icon="mdi-minus-box"
            >
            </v-treeview>
          </v-card-text>
        </v-flex>
      </v-layout>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn flat @click="tree = []"> Reset </v-btn>

      </v-card-actions>

      <!--<div role="tablist">-->
      <!--<b-card no-body class="mb-2">-->
      <!--<b-card-header header-tag="header" class="p-2" role="tab">-->
      <!--<b-btn block href="#" v-b-toggle.accordion4 variant="Secondary"-->
      <!--&gt;Literature <i class="far fa-hand-point-up"></i></b-btn-->
      <!--&gt;-->
      <!--</b-card-header>-->
      <!--<b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">-->
      <!--<b-card-body>-->
      <!--<p xs6 v-for="(classs, index) in classes" :key="'classs' + index">-->
      <!--<v-checkbox-->
      <!--v-model="selected"-->
      <!--v-bind:label="classs"-->
      <!--v-bind:value="classs"-->
      <!--&gt;</v-checkbox>-->
      <!--</p>-->
      <!--</b-card-body>-->
      <!--</b-collapse>-->
      <!--</b-card>-->
      <!--<b-card no-body class="mb-1">-->
      <!--<b-card-header header-tag="header" class="p-1" role="tab">-->
      <!--<b-btn block href="#" v-b-toggle.accordion2 variant="Secondary"-->
      <!--&gt;Arts <i class="far fa-hand-point-up"></i></b-btn-->
      <!--&gt;-->
      <!--</b-card-header>-->
      <!--<b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">-->
      <!--<b-card-body>-->
      <!--<p xs3 v-for="(Art, index) in Arts" :key="'Art' + index">-->
      <!--<v-checkbox-->
      <!--v-model="selected"-->
      <!--v-bind:label="Art"-->
      <!--v-bind:value="Art"-->
      <!--&gt;</v-checkbox>-->
      <!--</p>-->
      <!--</b-card-body>-->
      <!--</b-collapse>-->
      <!--</b-card>-->
      <!--<b-card no-body class="mb-1">-->
      <!--<b-card-header header-tag="header" class="p-1" role="tab">-->
      <!--<b-btn block href="#" v-b-toggle.accordion3 variant="Secondary"-->
      <!--&gt;Music <i class="far fa-hand-point-up"></i></b-btn-->
      <!--&gt;-->
      <!--</b-card-header>-->
      <!--<b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">-->
      <!--<b-card-body>-->
      <!--<p xs3 v-for="(music, index) in musics" :key="'music' + index">-->
      <!--<v-checkbox-->
      <!--v-model="selected"-->
      <!--v-bind:label="music"-->
      <!--v-bind:value="music"-->
      <!--&gt;</v-checkbox>-->
      <!--</p>-->
      <!--</b-card-body>-->
      <!--</b-collapse>-->
      <!--</b-card>-->
      <!--</div>-->

      <hr />
    </v-container>
  </div>
</template>

<script>
export default {
  name: "filterBar",
  data: () => ({
    breweries: [],
    isLoading: false,
    tree: [],
    types: [],
    ages: [
      "8-9mo",
      "9mo-1yr",
      "1-1.5yrs",
      "1.5-2yrs",
      "2-2.5yrs",
      "2.5-3yrs",
      "3-4yrs",
      "4-5yrs",
      "5-6yrs",
      "7-8yrs"
    ],
    classes: ["Reading", "Speaking", "Storytelling"],
    Arts: ["Drawing", "Movie", "Photograph"],
    musics: ["Instructment", "Songs"],
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
                      name: "Photograph",
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
  // computed: {
  //     items () {
  //         const children = this.types.map(type => ({
  //             id: type,
  //             name: this.getName(type),
  //             children: this.getChildren(type)
  //         }))
  //
  //         return [{
  //             id: 1,
  //             name: 'Theme',
  //             children
  //         }]
  //     },
  //     selections () {
  //         const selections = []
  //
  //         for (const leaf of this.tree) {
  //             const brewery = this.breweries.find(brewery => brewery.id === leaf)
  //
  //             if (!brewery) continue
  //
  //             selections.push(brewery)
  //         }
  //
  //         return selections
  //     },
  //     shouldShowTree () {
  //         return this.breweries.length > 0 && !this.isLoading
  //     }
  // },
  //
  // watch: {
  //     breweries (val) {
  //         this.types = val.reduce((acc, cur) => {
  //             const type = cur.brewery_type
  //
  //             if (!acc.includes(type)) acc.push(type)
  //
  //             return acc
  //         }, []).sort()
  //     }
  // },
  //
  // methods: {
  //     fetch () {
  //         if (this.breweries.length) return
  //
  //         return fetch('https://api.openbrewerydb.org/breweries')
  //             .then(res => res.json())
  //             .then(data => (this.breweries = data))
  //             .catch(err => console.log(err))
  //     },
  //     getChildren (type) {
  //         const breweries = []
  //
  //         for (const brewery of this.breweries) {
  //             if (brewery.brewery_type !== type) continue
  //
  //             breweries.push({
  //                 ...brewery,
  //                 name: this.getName(brewery.name)
  //             })
  //         }
  //
  //         return breweries.sort((a, b) => {
  //             return a.name > b.name ? 1 : -1
  //         })
  //     },
  //     getName (name) {
  //         return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
  //     }
  // }
};
</script>

<style scoped>
.container {
  padding-left: 40px;
}
h2 {
  margin-top: 53px;
}

.searchtest {
  padding: 18px;
  width: 280px;
}

i {
  font-size: 20px !important;
  align-items: flex-end;
}
</style>
