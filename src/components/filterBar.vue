<template>
  <div id="app">
    <v-container fluid class="container">
      <h1>CATEGORY</h1>
      <hr />
      Search:
      <v-layout row wrap>
        <b-form-input
          id="input-default"
          type="text"
          placeholder="Search by Location,ZipCode,Instructor.."
        ></b-form-input>
      </v-layout>
      <br />

      <!--Select Date-->
      Date Range:

      <v-layout row wrap>
        <b-form inline>
          <b-input
            class="mb-9 mr-sm-2 mb-sm-0"
            type="date"
            id="inlineFormInputName2"
            placeholder="Jane Doe"
          />
          <b-input
            class="mb-9 mr-sm-2 mb-sm-0"
            type="date"
            id="inlineFormInputName2"
            placeholder="Jane Doe"
          />
        </b-form>
      </v-layout>

      <br />
      <!--Date End section-->

      Time Range:
      <v-layout row wrap>
        <v-flex>
          <v-card-text>
            <v-range-slider v-model="value1"></v-range-slider>
          </v-card-text>
        </v-flex>
      </v-layout>

      <br />
      <!--Date End section-->

      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion1 variant="Secondary" class="col">Age Range <i class="far fa-hand-point-up"></i></b-btn>
          </b-card-header>
          <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-flex xs6 v-for="(age, index) in ages" :key="'age' + index">
                  <v-card-text>
                    <v-checkbox
                            v-model="selected"
                            v-bind:label="age"
                            v-bind:value="age"
                    ></v-checkbox>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>


      <br />

      Theme:
      <div role="tablist">
        <b-card no-body class="mb-2">
          <b-card-header header-tag="header" class="p-2" role="tab">
            <b-btn block href="#" v-b-toggle.accordion4 variant="Secondary"
              >Life Skills <i class="far fa-hand-point-up"></i></b-btn
            >
          </b-card-header>
          <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p xs6 v-for="(theme, index) in themes" :key="'theme' + index">
                <v-checkbox
                  v-model="selected"
                  v-bind:label="theme"
                  v-bind:value="theme"
                ></v-checkbox>
              </p>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion2 variant="Secondary"
              >Science <i class="far fa-hand-point-up"></i></b-btn
            >
          </b-card-header>
          <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p xs3 v-for="(theme, index) in themes" :key="'theme' + index">
                <v-checkbox
                  v-model="selected"
                  v-bind:label="theme"
                  v-bind:value="theme"
                ></v-checkbox>
              </p>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion3 variant="Secondary"
              >Something Else <i class="far fa-hand-point-up"></i></b-btn
            >
          </b-card-header>
          <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p xs3 v-for="(theme, index) in themes" :key="'theme' + index">
                <v-checkbox
                  v-model="selected"
                  v-bind:label="theme"
                  v-bind:value="theme"
                ></v-checkbox>
              </p>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>

      <hr />
    </v-container>
  </div>
</template>

<script>
export default {
  name: "filterBar",
  data: () => ({
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
    themes: ["Life Skills", "Science", "happy", "sth else"]
  })
};
</script>

<style scoped>
.container {
  padding-left: 40px;
}
h1 {
  font-size: 50px;
  margin: 20px auto;
  text-align: center;
}

/*.col{*/
  /*display: flex;*/
  /*align-items: flex-start;*/
/*}*/


i {
  font-size: 20px !important;
  align-items: flex-end;
}
</style>
