<template>
  <div>
    <form v-on:submit.prevent="dispatchUserSalary">
        <input type="text" placeholder="username" v-model="username">
        <input type="button" value="Submit" v-on:click.stop="getUserReposNames">
    </form>
  </div>
</template>

<script>
import { store } from "@/store";
import axios from "axios";

const ghURL = "https://api.github.com/users/";

export default {
  name: "FormUsername",
  data: function() {
    return {
      username: ""
    };
  },
  methods: {
    getUserReposNames: function() {
      store.setUsername(this.username);
      axios
        .get(ghURL + this.username + "/repos?per_page=100")
        .then(this.dispatchUsername)
        .then(this.$router.push("repos"))
        .catch(err => console.log(err));
    },
    dispatchUsername: function(response) {
      store.populateRepoNames(response);
    }
  }
};
</script>

<style scoped>
</style>
