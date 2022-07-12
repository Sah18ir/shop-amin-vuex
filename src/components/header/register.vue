<template>
<button>
    <!-- <div id="bigSidebar" class="bigsidenav"> -->
    <div id="registerSidenav" class="sidenav">
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
            src="https://s6.uupload.ir/files/icons8-search-48_ukj.png"
            alt=""
          />
        </div>
        <div class="login_register_header">
          <h5>ورود / عضویت</h5>
        </div>
      </div>
      <div class="number_shopping S-all-flex">
        <h2>ورود / عضویت</h2>
      </div>
      <div class="go_shopping_btn">
          <button>
            <router-link to="/">
              <h5>ورود</h5>
            </router-link>
          </button>
        </div>
    </div>
    <span style="font-size: 15px; cursor: pointer" @click="openNav()"
      ><div class="login_register_header">
        <h5>ورود / عضویت</h5>
    </div></span>
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
      document.getElementById("registerSidenav").style.width = "290px";
      document.getElementById("bigSidebar").style.width = "100%";
      document.getElementById("bigSidebar").style.background = "black";
    },

    closeNav() {
      document.getElementById("registerSidenav").style.width = "0";
      document.getElementById("registerSidenav").style.width = "0";
      document.getElementById("bigSidebar").style.background = "transparent";
    },
  },
};
</script>


<style>

.login_register_header h5{
    font-weight: lighter;
    color: #58595B;
}

.login_register_header h5:hover{
    color: red;
    transition: .4s all ease-in-out;
}

@media screen and (max-width: 1000px) {
  .login_register_header{
    display: none;
  }
}

</style>