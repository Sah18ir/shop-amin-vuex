<template>
  <button>
    <!-- <div id="bigSidebar" class="bigsidenav"> -->
    <div id="searchSidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
        >&times;</a
      >
      <div class="S-width-pic S-all-flex">
        <img
          src="https://s6.uupload.ir/files/icons8-basket-24_(1)_iyr4.png"
          alt=""
          class="image_shopping_sidebar"
        />
        <div class="search_header">
          <img
            src="https://s6.uupload.ir/files/icons8-search-48_(2)_hlf5.png"
            alt=""
          />
        </div>
        <div class="login_register_header">
          <h5>ورود / عضویت</h5>
        </div>
      </div>
      <div class="number_shopping">
        <h2>جستجو</h2>
        <div class="S-all-flex search_part_searchsidebar">
          <input
            class="input_search_sidebar"
            type="search"
            placeholder="جستجو کنید..."
          />
          <img
            src="https://s6.uupload.ir/files/icons8-arrow-pointing-left-30_fvs1.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <span style="font-size: 30px; cursor: pointer" @click="openNav()">
      <div class="search_header S-h-main">
        <img
          src="https://s6.uupload.ir/files/icons8-search-48_(2)_hlf5.png"
          alt=""
        /></div
    ></span>
    <!-- </div> -->
  </button>
</template>

<script>
export default {
  name: "NovincharmShoppping",
  data() {
    return {};
  },

  mounted() {},

  methods: {
    openNav() {
      document.getElementById("searchSidenav").style.width = "290px";
      document.getElementById("bigSidebar").style.width = "100%";
      document.getElementById("bigSidebar").style.background = "black";
    },

    closeNav() {
      document.getElementById("searchSidenav").style.width = "0";
      document.getElementById("searchSidenav").style.width = "0";
      document.getElementById("bigSidebar").style.background = "transparent";
    },
  },
};
</script>

<style>
.search_header img {
  width: 20px;
  margin-top: 0.5rem;
}

.S-h-main img {
  margin-top: 1.1rem;
}

.search_part_searchsidebar {
  width: 300px;
}

.search_part_searchsidebar img {
  width: 22px;
  left: 32px;
  margin-top: 0.5rem;
  position: absolute;
}

.input_search_sidebar {
  width: 240px;
  margin-right: 1rem;
  margin-top: 0.8rem;
  border-bottom: 1px solid black;
  padding: 0.4rem;
  outline: none;
}

/* clears the ‘X’ from Internet Explorer */
input[type="search"]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
input[type="search"]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
/* clears the ‘X’ from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}

@media screen and (max-width: 1000px) {
  .search_header img {
    margin-left: 5.5rem;
  }
}
</style>
