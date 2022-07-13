<template>
  <div class="nav_page_main">
    <section>
      <nav>
        <div>
          <ul>
            <div to="/" class="S-all-flex S-flex-wrap">
              <li
                class="list_nav_first_page_main"
                v-for="(item, index) in navlist"
                :key="index"
              >
                <router-link to="/Products" class="S-all-flex">
                  <h4>{{ item.navtitle }}</h4>
                </router-link>
                <div>
                  <ul class="box_big_nav" v-if="item.existli">
                    <router-link to="/Products" class="S-all-flex">
                      <li
                        class="list_nav_next_page_main"
                        v-for="(nextitem, index) in item.navlistnext"
                        :key="index"
                      >
                        <h4>{{ nextitem.navtitlenext }}</h4>
                      </li>
                    </router-link>
                    <router-link to="/Products" class="S-all-flex">
                      <li
                        class="list_nav_next_page_main"
                        v-for="(nextitem, index) in item.navlistnext"
                        :key="index"
                      >
                        <h4 class="S-color-black">
                          {{ nextitem.navtitlenext }}
                        </h4>
                      </li>
                    </router-link>
                    <router-link to="/Products" class="S-all-flex">
                      <li
                        class="list_nav_next_page_main"
                        v-for="(nextitem, index) in item.navlistnext"
                        :key="index"
                      >
                        <h4>{{ nextitem.navtitlenext }}</h4>
                      </li>
                    </router-link>
                    <router-link to="/Products" class="S-all-flex">
                      <li
                        class="list_nav_next_page_main"
                        v-for="(nextitem, index) in item.navlistnext"
                        :key="index"
                      >
                        <h4 class="S-color-black">
                          {{ nextitem.navtitlenext }}
                        </h4>
                      </li>
                    </router-link>
                    <router-link to="/Products">
                      <li
                        class="list_nav_next_page_main align-right S-mar-right-me"
                        v-for="(nextitem, index) in item.navlistnexttools"
                        :key="index"
                      >
                        <h4 class="S-color-black">
                          {{ nextitem.navtitlenext }}
                        </h4>
                      </li>
                    </router-link>
                  </ul>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </section>
    <br />
  </div>
</template>

<script>
export default {
  name: "NovincharmMainpage",

  data() {
    return {
      navlist: [
        {
          navtitle: "جدیدترین ها",
        },
        {
          navtitle: "آقایان",
          existli: "_",
          navlistnext: [
            {
              navtitlenext: "لباس مردانه",
            },
            {
              navtitlenext: "کیف پاسپورتی",
            },
            {
              navtitlenext: "کمربند",
            },
            {
              navtitlenext: "بوت و نیم بوت مردانه - %40",
            },
            {
              navtitlenext: "ست مردانه",
            },
          ],
        },
        {
          navtitle: "خانم ها",
          existli: "_",
          navlistnext: [
            {
              navtitlenext: "لباس زنانه",
            },
            {
              navtitlenext: "کیف کمری",
            },
            {
              navtitlenext: "کیف آرایشی",
            },
            {
              navtitlenext: "کفش اسپورت زنانه",
            },
            {
              navtitlenext: "کت و دستکش",
            },
          ],
        },
        {
          navtitle: "لوازم جانبی",
          existli: "_",
          navlistnexttools: [
            {
              navtitlenext: "جلد دسته چک",
            },
            {
              navtitlenext: "جلد مدارک",
            },
            {
              navtitlenext: "جا کلیدی",
            },
            {
              navtitlenext: "جا کارتی",
            },
            {
              navtitlenext: "واکس",
            },
          ],
        },
        {
          navtitle: "ست پیشنهادی",
        },
        {
          navtitle: "چرم بلاگ",
        },
        {
          navtitle: "بسته بندی سفارش",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.nav_page_main {
  width: 100%;
  height: 3.7vh;
  margin-top: 0.5rem;
}

.nav_page_main section {
  width: 50%;
  margin: 0 auto;
}

.list_nav_first_page_main {
  color: #58595b;
  list-style-type: none;
}

.list_nav_first_page_main:hover {
  color: black;
  transition: 0.3s all ease-in-out;
  border-bottom: 1px solid #58595b;
}

.list_nav_next_page_main {
  width: 100%;
  color: gray;
  list-style-type: none;
}

.list_nav_next_page_main h4 {
  font-size: 17px;
  font-weight: lighter;
}

.list_nav_next_page_main h4:hover {
  color: red;
  transition: 0.3s all ease-in-out;
}

.list_nav_first_page_main:hover .box_big_nav {
  transform: scaleY(1);
}

.box_big_nav {
  width: 94.6%;
  transform: scaleY(0);
  transition: 0.5s all ease-in-out;
  transform-origin: top;
  z-index: 3;
  position: absolute;
  right: 41px;
  line-height: 37px;
  text-align: center;
  margin-top: 2px;
  padding: 27px;
  padding-top: 1.5rem;
  background-color: #fefefeef;
}

@media screen and (max-width: 1000px) {
  .nav_page_main {
    display: none;
  }
}
</style>
