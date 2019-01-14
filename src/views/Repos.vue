<template>
  <div>
    <div class="btn-container">
      <div class="btn" v-for="repo in repos" v-bind:key="repo.id" v-on:click="getReadme(repo.name)">{{ repo.name }}</div>
    </div>
  </div>
</template>

<script>
import { store } from "@/store";
import axios from "axios";

const repoURL = "https://api.github.com/repos/";

export default {
  name: "repo-list",
  data: function() {
    return {
      user: store.state.username,
      repos: store.state.repos
    };
  },
  methods: {
    getReadme: function(repoName) {
      axios
        .get(repoURL + this.user + "/" + repoName + "/readme", {
          headers: { Accept: "application/vnd.github.v3.html" }
        })
        .then(response =>
          this.$router.push({
            name: "repo",
            params: { user: this.user, repo: repoName, readme: response.data }
          })
        )
        .catch(err => alert("README most likely doesn't exist ..\n" + err));
    }
  }
};
</script>

<style scoped>
.btn-container {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.btn {
  background: #34d058;
  background-image: -webkit-linear-gradient(top, #34d058, #28a745);
  background-image: -moz-linear-gradient(top, #34d058, #28a745);
  background-image: -ms-linear-gradient(top, #34d058, #28a745);
  background-image: -o-linear-gradient(top, #34d058, #28a745);
  background-image: linear-gradient(to bottom, #34d058, #28a745);
  -webkit-border-radius: 8;
  -moz-border-radius: 8;
  border-radius: 8px;
  font-family: Courier New;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  margin-bottom: 8px;
}

.btn:hover {
  background: #28a745;
  background-image: -webkit-linear-gradient(top, #28a745, #28a745);
  background-image: -moz-linear-gradient(top, #28a745, #28a745);
  background-image: -ms-linear-gradient(top, #28a745, #28a745);
  background-image: -o-linear-gradient(top, #28a745, #28a745);
  background-image: linear-gradient(to bottom, #28a745, #28a745);
  text-decoration: none;
}
</style>
