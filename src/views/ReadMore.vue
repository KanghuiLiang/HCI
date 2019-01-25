<template>
  <div class="app">
    <v-container>
      <v-layout row wrap>
        <router-link to="/find-A-Class">
          <i class="fas fa-3x fa-chevron-circle-left"></i>
        </router-link>
        <h1 class="back">BACK TO CLASSES</h1>
      </v-layout>


        <v-layout row wrap>
          <v-flex xs12 md8>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-img
              src="http://northcentralnews.net/wp-content/uploads/2013/09/Painting-outside.jpg"
            ></v-img>
          </v-flex>
          <v-flex xs12 md1></v-flex>
          <v-flex xs12 md4>
            <h1>Theme: Drawing</h1>
            Age: 2-3years <br />
            Coach: Tim
          </v-flex>
        </v-layout>
            <br>
<!--<v-divider></v-divider>-->
<!--Description-->
            <!--<v-layout row wrap>-->
              <!--<v-flex xs12 md9>-->
                <!--<h1>Description</h1>-->
                <!--<p>-->
                  <!--Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,-->
                  <!--consequatur cum deserunt distinctio dolores expedita hic illo-->
                  <!--ipsam, modi molestias nihil odit pariatur quia quis sed suscipit,-->
                  <!--tempora vitae.-->
                <!--</p>-->
              <!--</v-flex>-->
            <!--</v-layout>-->
            <!--<v-divider></v-divider>-->
            <br>
<!--Location-->

            <v-layout row wrap>
              <v-flex xs12 md6>
                <v-img
                        src="https://www.sataban.com/wp-content/sabai/File/files/c28524cd9027500fc40b5f322e506e99.png"
                ></v-img>
              </v-flex>
              <v-flex xs12 md1></v-flex>
              <v-flex xs12 md3>
                <h1>Location:</h1>
                <p>
                  Stamford <br />
                  Some Road Soi 55 <br />
                  BKK, Thailand
                </p>
              </v-flex>
            </v-layout>
          </v-flex>

      <v-flex xs12 md4>
          <v-flex xs12 md12>
            <v-card style="background-color: #F5F5F5"
              >
              <div class="bookinginfo">
                <h1>BOOKING OPTIONS</h1>
                <div class="detail">
              <h2>Information</h2>
              <p>Date: 2018-01-01 <br />
                Time: 8:30 - 10:30</p>
                <!--<h1 style="color: #5bc0af">Promotion Code Available</h1>-->
                </div>
   <!--<v-card-actions class="pa-3">-->
     <!--<v-btn> Click And Know more Yearly Plan</v-btn>-->
     <!--<v-spacer></v-spacer>-->
     <!--Free Trial-->
   <!--</v-card-actions>-->

              </div>
            </v-card>

            <br>
            <v-flex>
              <div class="Toy"><h1>RELATED TOY</h1>
              </div>
              <v-card style="background-color: #F5F5F5"
              >

                  <div><v-flex>
                    <!--<v-img height="250px" src=""></v-img>-->
                  </v-flex>
                    <v-card color="cyan darken-2" class="white--text">
                      <v-layout>
                        <v-flex xs5>
                          <v-img
                                  src="https://zdnet2.cbsistatic.com/hub/i/r/2017/07/18/071068d1-e257-4abf-811d-48a626f621f7/resize/770xauto/72e298cc964f48604e0edb0a3ee72339/bear.jpg"
                                  height="125px"
                                  contain
                          ></v-img>
                        </v-flex>
                        <v-flex xs7>
                          <v-card-title primary-title>
                            <div>
                              <div class="headline">Supermodel</div>
                              <div>Foster the People</div>
                              <div>(2014)</div>
                            </div>
                          </v-card-title>
                        </v-flex>
                      </v-layout>
                      <v-divider light></v-divider>
                      <v-card-actions class="pa-3">

                        <v-btn style="background-color:lightgray">$3.99 BUY NOW</v-btn>
                        <v-spacer></v-spacer>
                        <v-icon>star_border</v-icon>
                        <v-icon>star_border</v-icon>
                        <v-icon>star_border</v-icon>
                        <v-icon>star_border</v-icon>
                        <v-icon>star_border</v-icon>
                      </v-card-actions>
                    </v-card>
                </div>
              </v-card>
            </v-flex>
          </v-flex>








      <br>


      </v-flex>
    </v-layout>

      <br>
      <!--related classes-->
      <h1>Related Classes:</h1>
      <v-layout>

        <v-flex
                xs3
                v-for="(post, index) in postList"
                :key="'post' + index"
                class="card"
        >
          <v-card>
            <router-link to="/read-more">
              <v-img v-bind:src="post.img" aspect-ratio="1.75"></v-img>

              <v-card-title primary-title>
                <div>
                  Theme: {{ post.title }}
                  <div>Date: {{ post.date }}</div>
                  <div>Time: {{ post.time }}</div>
                  <small>Coach: {{ post.author }}</small>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="orange">Read More</v-btn>
              </v-card-actions>
            </router-link>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
class Post {
  constructor(title, link, author, img, date, time) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
    this.date = date;
    this.time = time;
  }
}

export default {
  name: "classMore",
  data: () => {
    return {
      search: "",
      postList: [
        new Post(
            "React.js",
            "https://facebook.github.io/react/",
            "Tim",
            "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg",
            "2018-01-01",
            "8:30 - 10:30"
        ),
        new Post(
          "Drawing",
          "https://facebook.github.io/react/",
          "Tim",
          "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg",
          "2018-01-01",
          "8:30 - 10:30"
        ),
        new Post(
          "Storytelling",
          "https://facebook.github.io/react/",
          "Hui",
          "https://media.npr.org/assets/img/2017/08/18/istock-586379824_custom-741b39cd56655a0f4bbd70245b26576c774b4049-s800-c85.jpg",
          "2018-01-01",
          "8:30 - 10:30"
        )
      ]
    };
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style scoped>
.app {
  padding-top: 30px;
}

.back{
  padding-bottom: 20px;
  color: #5bc0af;
}

.card {
  margin: 20px;
}
  .bookinginfo{
    padding-top: 20px;
    text-align: center;
    height: 440px;
  }
  .detail{
    /*background-color: white;*/
    margin-left: 50px;
    margin-right: 50px;


  }
</style>
