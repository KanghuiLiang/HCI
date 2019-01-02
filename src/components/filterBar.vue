<template>
  <div id="app">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md6>
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
      <hr />
      <!--Select section-->
      <v-layout>
        <v-flex> <v-select :items="ages" label="Age Range"></v-select> </v-flex>
      </v-layout>

      <!--Checkbox section-->
      <v-layout>
        <v-flex>
          <p>Multiple select</p>
          <v-switch v-model="people" label="John" value="John"></v-switch>
          <v-switch v-model="people" label="Jacob" value="Jacob"></v-switch>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "filterBar",
  data: () => ({
    people: ["John"],
    ages: [
      "8 - 11months",
      "1 - 2years",
      "3 - 4years",
      "5 - 6years",
      "7 - 8years"
    ],
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  })
};
</script>
