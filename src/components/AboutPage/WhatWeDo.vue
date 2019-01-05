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
                  {{ card.card_text}}
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
          url:
            "https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/42121348_2152437464789322_5319586492408922112_n.jpg?_nc_cat=100&_nc_ht=scontent.fbkk5-5.fna&oh=98e9989c508d13aac59f626e40c0402e&oe=5C95D358",
          card_text:
            "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire"},
        {
          title: "Kang",
          url:
            "https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/16/Photos/Processed/post-office.JPG",
          card_text:
            "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire"
        },
        {
          title: "Kangaroo",
          url:
            "https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/42241151_2152428811456854_8663187587105554432_n.jpg?_nc_cat=100&_nc_ht=scontent.fbkk5-5.fna&oh=afff34e4c9ed9ea0752684e56807af48&oe=5C8D45FF",
          card_text:
            "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire"
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
