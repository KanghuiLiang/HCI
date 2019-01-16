<template>
  <div id="app">
    <v-container fluid class="container">
      <!--<v-layout>-->
      <!--<v-text-field-->
      <!--class="mx-5"-->
      <!--flat-->
      <!--label="Search by Zipcode, Coach, Location..."-->
      <!--prepend-inner-icon="search"-->
      <!--solo-inverted-->
      <!--id="test"-->
      <!--&gt;</v-text-field>-->
      <!--</v-layout>-->
      <h1>CLASSES</h1>
      <v-layout row wrap>
        <v-flex
          xs3
          v-for="(post, index) in postList"
          :key="'post' + index"
          class="card"
        >
          <v-card>
            <router-link to="/read-more">
              <v-img v-bind:src="post.img" height="200px"></v-img>

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

      <!--<v-layout row wrap>-->
        <!--<v-flex>-->
            <!--<v-card-text style="height: 100px; position: relative">-->
              <!--<v-btn-->
                      <!--absolute-->
                      <!--dark-->
                      <!--fab-->
                      <!--top-->
                      <!--right-->
                      <!--color="pink"-->
              <!--&gt;-->
                <!--<v-card-text>Try A Class</v-card-text>-->
              <!--</v-btn>-->
            <!--</v-card-text>-->
        <!--</v-flex>-->
      <!--</v-layout>-->


      <br>
      <v-layout>
        <v-flex>
      <b-pagination class="page" size="lg" :total-rows="100" v-model="currentPage" :per-page="10">
      </b-pagination>
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
  name: "classShow",
  data: () => {
    return {
      search: "",
      postList: [
        new Post(
          "Drawing",
          "https://vuejs.org/",
          "Chris",
          "http://northcentralnews.net/wp-content/uploads/2013/09/Painting-outside.jpg",
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
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Timmy",
          "https://media.timeout.com/images/102728538/image.jpg",
          "2018-01-01",
          "8:30 - 10:30"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Sam",
          "https://www.youngparents.com.sg/sites/default/files/carousel_images/How%20art%20class%20helps%20my%20child%20B.png",
          "2018-01-01",
          "8:30 - 10:30"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Phirun",
          "https://media-cdn.tripadvisor.com/media/photo-s/0a/a4/01/1a/kids-art-class.jpg",
          "2018-01-01",
          "8:30 - 10:30"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Dom",
          "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg",
          "2018-01-01",
          "8:30 - 10:30"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Patty",
          "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg",
          "2018-01-01",
          "8:30 - 10:30"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Vichea",
          "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg",
          "2018-01-01",
          "8:30 - 10:30"
        ),
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
h1 {
  font-size: 50px;
  margin: 20px auto;
  text-align: center;
  color: #5bc0af;
}
input {
  padding: 4px 100px;
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: 0.15s all ease-in-out;
  background: white;
}

.card {
  margin: 20px;
}
a {
  text-decoration: none;
  color: black;
}

  .page{
    padding-left: 250px
  }




</style>
