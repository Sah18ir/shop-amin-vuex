<template>
  <header class="main_header_page">
    <section class="box_main_header_page S-all-flex">
      <div class="S-width-pic S-all-flex">
        <shoppping />
        <search />
        <register />
      </div>
      <logo />
      <reshamburgermenu/>
      <article class="S-width-head S-all-flex">
        <div class="club_header">
          <router-link to="/" class="S-all-flex">
            <img
              src="https://s6.uupload.ir/files/icons8-user-account-24_(1)_d4rb.png"
              alt=""
            />
            <h5 class="S-color-red">باشگاه مشتریان</h5>
          </router-link>
        </div>
        <div
          class="hover_header all_border_right_header home_header S-thin-border-right S-padall-nim"
        >
          <router-link to="/">
            <img
              class="S-mar-top-ten"
              src="https://s6.uupload.ir/files/icons8-home-24_oceg.png"
              alt=""
            />
          </router-link>
        </div>
        <div
          class="hover_header all_border_right_header S-thin-border-right S-padall-nim"
        >
          <router-link to="/">
            <h5 class="S-mar-top-reg-mine">FAQ</h5>
          </router-link>
        </div>
        <div
          class="hover_header location_header all_border_right_header S-thin-border-right S-padall-nim"
        >
          <router-link to="/">
            <img
              class="S-mar-top-ten"
              src="https://s6.uupload.ir/files/icons8-location-24_mpj4.png"
              alt=""
            />
          </router-link>
        </div>
        <div>
          <changelanguage />
        </div>
      </article>
    </section>
  </header>
</template>

<script>
import Changelanguage from "./changelanguage.vue";
import Logo from "./logo.vue";
import Register from "./register.vue";
import Reshamburgermenu from './reshamburgermenu.vue';
import Search from "./search.vue";
import shoppping from "./shoppping.vue";
export default {
  components: { shoppping, Search, Register, Logo, Changelanguage, Reshamburgermenu },
  name: "NovincharmPageheader",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.main_header_page {
  width: 100%;
  background-color: #eeeeee;
}

.box_main_header_page {
  width: 95%;
  margin: 0 auto;
}

.home_header img {
  width: 19px;
}

.club_header img {
  width: 19px;
  height: 20px;
}

.club_header {
  width: 900px;
  margin-left: 1rem;
}

.location_header img {
  height: 21px;
}

.all_border_right_header {
  width: 100%;
  height: 62px;
  padding: 0.2rem;
  text-align: center;
}

.hover_header:hover {
  color: red;
  background: #f5f5f5;
  transition: 0.5s all ease-in-out;
}

.hover_header:hover h5{
  color: red;
  transition: 0.5s all ease-in-out;
}

@media screen and (max-width: 1000px) {
  .box_main_header_page article{
    display: none;
  }
}
</style>
