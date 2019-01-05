<template>
  <div class="container">
    <v-container>
      <v-layout row wrap>
        <v-flex
                xs4
          v-for="(post, index) in postList"
          :key="'post' + index"
        >
          <v-card>
            <v-img v-bind:src="post.img" aspect-ratio="2.75"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div>
                  Located two hours south of Sydney in the <br />Southern
                  Highlands of New South Wales, ...
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
}

export default {
  name: "classShow",
  data: () => {
    return {
      search: "",
      postList: [
        new Post(
          "Nature",
          "https://vuejs.org/",
          "Chris",
          "http://northcentralnews.net/wp-content/uploads/2013/09/Painting-outside.jpg"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Tim",
          "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Tim",
          "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Tim",
          "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Tim",
          "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Tim",
          "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Tim",
          "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Tim",
          "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Tim",
          "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Tim",
          "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Tim",
          "https://csdailyblog.files.wordpress.com/2010/09/artout2.jpg"
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
.container {
  margin-top: 20px;
}
</style>
