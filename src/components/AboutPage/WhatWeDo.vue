<template>
  <div>
    <v-app id="inspire">
      <h1>WHAT WE DO</h1>
      <v-layout row justify-center>
        <v-flex
          xs12
          md4
          v-for="(card, index) in cards"
          :key="'card' + index"
          class="card"
        >
          <v-card>
            <v-img :src="card.url" aspect-ratio="2.75"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ card.title }}</h3>
                <div>
                  Located two hours south of Sydney in the <br />Southern
                  Highlands of New South Wales, ...
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "wedo",
  data() {
    return {
      cards: [
        {
          title: "Kangaroo Valley Safari?",
          url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          card_text:
            "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire" +
            " splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat."
        },

        {
          title: "Kangaroo",
          url: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
          card_text:
            "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire" +
            " splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat."
        },

        {
          title: "Kang",
          url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          card_text:
            "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire" +
            " splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat."
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  padding-top: 100px;
  font-size: 45px;
}
.card {
  margin: 5px;
}
</style>
