<template>
  <div class="find_stores_main_page">
    <section>
      <div class="find_stores_ad_num S-all-flex">
        <h4>یافتن آدرس و ساعات کاری فروشگاه های نزدیک به شما</h4>
        <img
          src="https://s6.uupload.ir/files/icons8-search-50_ds0.png"
          alt=""
        />
      </div>
    </section>
    <div class="line_seprate_main_page"></div>
  </div>
</template>

<script>
export default {
  name: "NovincharmFindStoresMain",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  
};
</script>

<style>
.find_stores_main_page {
  margin-top: 3rem;
}

.find_stores_main_page section {
  background-color: #dcdcdc;
  position: relative;
  width: 94.2%;
  height: 50vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.find_stores_ad_num {
  width: 570px;
  height: 64px;
  background-color: #58595b;
  padding: 1rem;
  color: white;
  cursor: pointer;
  margin: 0 auto;
}

.find_stores_ad_num h4 {
  font-weight: lighter;
}

.find_stores_ad_num img {
  width: 24px;
}

.line_seprate_main_page {
  width: 94.2%;
  padding: 0.3rem 0;
  margin: 2.5rem auto;
  background-color: #f2f2f2;
}

@media screen and (max-width: 1000px) {
  .find_stores_main_page section {
    height: 30vh;
  }
  .find_stores_ad_num {
    width: 300px;
    font-size: 13px;
  }
  .find_stores_ad_num img {
    display: none;
  }
}
</style>
