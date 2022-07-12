<template>
  <router-link to="/">
    <div
      class="language_header S-all-flex all_border_right_header S-thin-border-right"
    >
      <h4>FA</h4>
      <img src="https://s6.uupload.ir/files/icons8-globe-24_dtxh.png" alt="" />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NovincharmChangelanguage",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.language_header img {
  width: 21px;
  margin-top: .2rem;
}

.language_header h4 {
  color: #58595B;
  margin-top: 0.6rem;
  margin-left: 0.3rem;
  font-weight: lighter;
}

.language_header h4:hover {
  color: red;
  transition: .5s all ease-in-out;
}

.language_header {
  padding-right: 0.2rem;
}

.language_header:hover {
  background: #F5F5F5;
  transition: .5s all ease-in-out;
}
</style>
