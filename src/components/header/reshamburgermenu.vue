<template>
  <button>
    <!-- <div id="bigSidebar" class="bigsidenavmenu"> -->
    <div id="hamburgersidenavmenu" class="sidenavmenu">
      <div class="box_sidenav_detail">
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
          <logo />
        </div>
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
          >&times;</a
        >
      </div>
      <button class="register_btn_sidenav">
        <h4>ورود / عضویت</h4>
      </button>
      <details class="part_list_detail_hamburgersidenavmenu">
          <ul class="list_Show_part_list_detail_hamburgersidenavmenu">
            <router-link to="/Products"><li>زنانه</li></router-link>
            <router-link to="/Products"><li>مردانه</li></router-link>
            <router-link to="/Products"><li>اکسسوری</li></router-link>
          </ul>
          <summary class="S-all-flex">
            <h5>همه دسته بندی ها</h5>
            <left-arrow-chevron
              class="left_chevron_part_list_detail_hamburgersidenavmenu"
            />
          </summary>
        </details>
        <ul class="list_types_all_hamburgersidenavmenu">
          <router-link to="/Products"><li>بلاگ</li></router-link>
          <router-link to="/Products"><li>درباره با ما</li></router-link>
          <router-link to="/Products"><li>تماس با ما</li></router-link>
        </ul>
    </div>
    <span style="font-size: 30px; cursor: pointer" @click="openNav()">
      <div class="hamber_res_menu">
        <img
          src="https://s6.uupload.ir/files/icons8-menu-30_(1)_jorc.png"
          alt=""
        /></div
    ></span>
    <!-- </div> -->
  </button>
</template>

<script>
import logo from "./logo.vue";
export default {
  components: { logo },
  name: "NovincharmShoppping",
  data() {
    return {};
  },

  mounted() {},

  methods: {
    openNav() {
      document.getElementById("hamburgersidenavmenu").style.width = "100%";
      document.getElementById("bigSidebar").style.width = "100%";
      document.getElementById("bigSidebar").style.background = "black";
    },

    closeNav() {
      document.getElementById("hamburgersidenavmenu").style.width = "0";
      document.getElementById("hamburgersidenavmenu").style.width = "0";
      document.getElementById("bigSidebar").style.background = "transparent";
    },
  },
};
</script>

<style>
.sidenavmenu {
  display: none;
}

.hamber_res_menu img {
  width: 25px;
  display: none;
  margin-top: 0.2rem;
}

.sidenavmenu {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  background-color: #212121;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenavmenu a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenavmenu a:hover {
  color: #f1f1f1;
}

.sidenavmenu .closebtn {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 36px;
  color: #d3d3d3 !important;
}

.sidenavmenu span {
  margin-top: 1rem;
  width: 20px;
  height: 21px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  line-height: 22px;
  font-weight: bold;
  font-size: 12px;
  background-color: #58595b;
  color: white;
}

.box_sidenav_detail {
  padding-bottom: 0.5rem;
  border-bottom: 0.1px solid gray;
}

.sidenavmenu .search_header {
  margin-right: 0.5rem;
}

.register_btn_sidenav {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.5rem;
  display: flex;
  justify-content: right;
  border-radius: 5px;
  margin: 1rem;
}

.register_btn_sidenav h4 {
  font-weight: lighter;
}

.logo_main_hamburgersidenavmenu {
  position: absolute;
  top: 0.7rem;
  right: 0.5rem;
}

.logo_main_hamburgersidenavmenu img {
  width: 100px;
}

.sidenavmenu {
  display: none;
}

.sidenavmenu {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  background-color: #ffffff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenavmenu a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenavmenu a:hover {
  color: #f1f1f1;
}

.sidenavmenu .closebtn {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 42px;
  color: #666666 !important;
}

.sidenavmenu span {
  margin-top: 1rem;
  width: 20px;
  height: 21px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  line-height: 22px;
  font-weight: bold;
  font-size: 12px;
  background-color: #58595b;
  color: white;
}

.sidenavmenu .search_header {
  margin-right: 0.5rem;
}

.register_btn_sidenav {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.5rem;
  display: flex;
  justify-content: right;
  border-radius: 5px;
  margin: 1rem;
}

.register_btn_sidenav h4 {
  font-weight: lighter;
}

.part_list_detail_hamburgersidenavmenu {
  margin-right: 1rem;
}

.list_Show_part_list_detail_hamburgersidenavmenu {
  margin-right: 1.3rem;
  margin-top: 0.5rem;
}

.list_Show_part_list_detail_hamburgersidenavmenu {
  color: #4a5355;
  font-size: 0.9rem;
  line-height: 2;
}

.sidenavmenu li{
  list-style-type: none;
}

.part_list_detail_hamburgersidenavmenu h5 {
  color: #444;
}

.left_chevron_part_list_detail_hamburgersidenavmenu {
  position: absolute;
  left: 7%;
  top: 21%;
  color: #2a6155 !important;
}

.left_chevron_part_list_detail_hamburgersidenavmenu_next {
  margin-left: 4rem;
  margin-top: .8rem;
}

.left_chevron_part_list_detail_hamburgersidenavmenu_end {
  margin-left: 2.2rem;
  margin-top: .5rem;
}

details[open] summary .left_chevron_part_list_detail_hamburgersidenavmenu {
  transform: rotate(270deg);
}

.list_mini[open]
  summary
  .left_chevron_part_list_detail_hamburgersidenavmenu_next {
  transform: rotate(270deg);
}

details[open] summary .left_chevron_part_list_detail_hamburgersidenavmenu_end {
  transform: rotate(270deg);
}

.title_woman_hamburgersidenavmenu {
  list-style: none;
}

.title_woman_hamburgersidenavmenu li {
  color: #444;
  font-weight: bold;
  font-size: 14.5px;
}

.title_woman_hamburgersidenavmenu li::before {
  content: "\2022";
  color: #2a6155;
  font-weight: bold;
  width: 1em;
  margin-left: 1em;
  font-size: 20px;
}

.title_clothes_hamburgersidenavmenu li {
  list-style-type: disc;
  font-weight: bolder;
  list-style-type: none;
}

@media screen and (max-width: 1000px) {
  .sidenavmenu {
    display: block;
  }
  .hamber_res_menu img {
    display: block;
  }
}
</style>
