import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Repo from "./views/Repo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/repos",
      name: "repo-list",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Repos.vue")
    },
    {
      path: "/repos/:repo",
      name: "repo",
      component: Repo,
      props: true
    }
  ]
});
