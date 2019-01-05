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
            <v-img :src="card.url" aspect-ratio="1.75"></v-img>
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
          url: "https://www.wikihow.com/images/f/ff/Draw-a-Cute-Cartoon-Person-Step-14.jpg",
          title: "Co-Founder"
        },

        {
          name: "Kan",
          url: "https://pm1.narvii.com/5869/709ab1a729afa6d850be2fc666199fcdf46d0122_hq.jpg",
          title: "Co-Founder"
        },
        {
          name: "Amy",
          url: "https://i.pinimg.com/736x/bc/fa/8e/bcfa8e5546ee8633f6cc9b2da686ce24--art-blog-illustration-character-girl.jpg",
          title: "Co-Founder"
        },
        {
          name: "No",
          url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Co-Founder"
        },
        {
          name: "Sarah",
          url: "https://i.pinimg.com/originals/1e/33/cb/1e33cb5afa2d43e7be0b1fff060f8866.jpg",
          title: "Co-Founder"
        },
        {
          name: "Hui",
          url: "https://i.pinimg.com/originals/f9/e3/f3/f9e3f359e024316e352ac60eaa3d836e.jpg",
          title: "Co-Founder"
        },
        {
          name: "Valley Safari?",
          url: "https://img.freepik.com/free-vector/happy-businessman-making-thumbs-up-sign_1325-454.jpg?size=338&ext=jpg",
          title: "Co-Founder"
        },
        {
          name: "Vichea",
          url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Coach"
        },
        {
          name:"Phirun",
          url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Coach"
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
