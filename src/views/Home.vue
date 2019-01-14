<template>
  <div class="home">
    <HomeMessage msg="Enter the GitHub account you wish to view:"/>
    <FormUsername/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMessage from "@/components/HomeMessage.vue";
import FormUsername from "@/components/FormUsername.vue";

export default {
  name: "home",
  components: {
    HomeMessage,
    FormUsername
  }
};
</script>
