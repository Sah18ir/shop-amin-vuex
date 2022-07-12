<template>
  <div id="app">
    <pageheader />
    <nav-page-main />
    <router-view />
    <!-- <contact-us-fixed/> -->
    <pagefooter />
  </div>
</template>

<script>
import Pagefooter from "./components/footer/pagefooter.vue";
import Pageheader from "./components/header/pageheader.vue";
// import ContactUsFixed from "./components/main/contactUsFixed.vue";
import NavPageMain from "./components/main/homePage/navPageMain.vue";
export default {
  components: { Pageheader, Pagefooter, NavPageMain },
};
</script>
<style>

</style>
