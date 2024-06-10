<template>

  <NavBar />

  <router-view />

</template>

<script>

import NavBar from "./components/NavBar.vue"

export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {

    }
  },
}

</script>

<style lang="scss"></style>
