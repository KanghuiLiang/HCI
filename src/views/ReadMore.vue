<template>
  <div class="app">
    <v-container>
      <v-layout row wrap>
        <router-link to="/find-A-Class">
          <i class="fas fa-3x fa-chevron-circle-left"></i>
        </router-link>
        <h1>BACK TO CLASSES</h1>
      </v-layout>

      <br />
      <v-layout row wrap>
        <v-layout row wrap>
          <v-flex xs12 md4>
            <v-img
              src="http://northcentralnews.net/wp-content/uploads/2013/09/Painting-outside.jpg"
            ></v-img>
          </v-flex>
          <v-flex xs12 md1></v-flex>
          <v-flex xs12 md4>
            <h1>Theme: Drawing</h1>
            Date: 2018-01-01 <br />
            Time: 8:30 - 10:30 <br />
            Age: 2-3years <br />
            Coach: Tim
          </v-flex>

          <v-flex>
            <v-card style="background-color: #F5F5F5"
              ><h1>BOOKING OPTIONS</h1>
              <div>fdsjfbjdsbfdsbfdsdbsfh</div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-layout>
      <br />
      <v-layout row wrap>
        <v-flex xs12 md7>
          <h1>Description</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
            consequatur cum deserunt distinctio dolores expedita fugit hic illo
            ipsam, modi molestias nihil odit pariatur quia quis sed suscipit,
            tempora vitae.
          </p>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 md4>
          <v-img
            src="https://www.sataban.com/wp-content/sabai/File/files/c28524cd9027500fc40b5f322e506e99.png"
          ></v-img>
        </v-flex>
        <v-flex xs12 md1></v-flex>
        <v-flex xs12 md4>
          <h1>Location:</h1>
          <p>
            Stamford <br />
            Some Road Soi 55 <br />
            BKK, Thailand
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped>
.app {
  padding-top: 30px;
}
</style>
