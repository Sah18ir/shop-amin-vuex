<template>
  <router-link to="/">
    <div class="logo_header S-all-flex">
      <img
        src="https://novinleather.com/template/default/fa/images/logo.svg"
        alt=""
      />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NovincharmLogo",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.logo_header {
  margin-right: 19.5rem;
}

@media screen and (max-width: 1000px) {
  .logo_header {
    margin-left: 1rem;
    margin-right: 0;
  }
  .logo_header img{
    width: 130px;
    margin-left: 5.5rem;
  }
}
</style>
