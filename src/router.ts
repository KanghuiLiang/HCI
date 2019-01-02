import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import classes from "./views/Classes.vue";
import coach from "./views/Coach.vue";
import blog from "./views/blog.vue";
import about from "./views/About.vue";
import contact from "./views/ContactUs.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/find-A-Class",
      name: "Find A Class",
      component: classes
    },

    {
      path: "/be-A-Coach",
      name: "Be Our Coach",
      component: coach
    },
    {
      path: "/Blog",
      name: "Stem Blog",
      component: blog
    },
    {
      path: "/about-us",
      name: "About Us",
      component: about
    },
    {
      path: "/contact-us",
      name: "Contact Us",
      component: contact
    },
  ],
});
