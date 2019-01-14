<template>
  <div>
    <h1>README of {{ user }}'s {{ repo }} repo:</h1>
    <hr><br/>

    <div v-html="readme" class="readme-container"></div>
  </div>
</template>

<script>
export default {
  props: ["user", "repo", "readme"]
};
</script>

<style scoped>
.readme-container {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
</style>
