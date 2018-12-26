<template>
  <div>
    <v-app id="inspire">
      <h1>MEET OUR TEAM</h1>
      <v-layout row wrap>
        <v-flex
          xs12
          md4
          v-for="(card, index) in cards"
          :key="'card' + index"
          class="card"
        >
          <v-card class="rounded-card">
            <v-img :src="card.url" aspect-ratio="2.75"></v-img>
          </v-card>
          <div>
            <h3 class="headline mb-0">{{ card.name }}</h3>
            <div>{{ card.title }}</div>
          </div>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "team",
  data() {
    return {
      cards: [
        {
          name: "Kangaroo",
          url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Co-Founder"
        },

        {
          name: "Kangaroo",
          url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Co-Founder"
        },
        {
          name: "Valley Safari?",
          url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Co-Founder"
        },
        {
          name: "Valley Safari?",
          url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Co-Founder"
        },
        {
          name: "Valley Safari?",
          url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Co-Founder"
        },
        {
          name: "Valley Safari?",
          url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Co-Founder"
        },
        {
          name: "Valley Safari?",
          url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Co-Founder"
        },
        {
          name: "Valley Safari?",
          url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Co-Founder"
        },
        {
          name: "Valley Safari?",
          url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Co-Founder"
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 45px;
}
.card {
  padding-bottom: 30px;
}
/*.rounded-card {*/
  /*border-radius: 50px;*/
/*}*/
</style>
