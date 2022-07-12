<template>
  <div class="banner_footer">
    <article class="S-all-flex S-flex-wrap">
      <div class="notification_footer_box S-all-flex S-flex-wrap">
        <h4 class="title_banner_footer">
          از تخفیف‌ها و جدیدترین‌های نوین‌چرم باخبر شوید!
        </h4>
        <div class="box_search_banner_footer S-displa-flex">
          <input
            type="search"
            placeholder="آدرس ایمیل یا شماره تلفن خود را وارد کنید"
          />
          <router-link to="/"
            ><button><h4>تأیید</h4></button></router-link
          >
        </div>
      </div>
      <router-link to="/">
        <div class="social_media_footer S-all-flex">
          <img src="https://s6.uupload.ir/files/1527664166_8cn3.png" alt="" />
          <img src="https://s6.uupload.ir/files/1527415244_xg8r.png" alt="" />
          <img src="https://s6.uupload.ir/files/1589952172_ohn2.png" alt="" />
          <img src="https://s6.uupload.ir/files/1527415222_am0e.png" alt="" />
          <img src="https://s6.uupload.ir/files/1527415233_dgvd.png" alt="" />
          <img src="https://s6.uupload.ir/files/1589952282_o52p.png" alt="" />
        </div>
      </router-link>
    </article>
  </div>
</template>

<script>
export default {
  name: "NovincharmNewsbanner",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.banner_footer {
  padding: 1.2rem 0;
  color: white;
  background-color: #58595b;
}

.banner_footer article {
  width: 95%;
  margin: 0 auto;
}

.notification_footer_box {
  width: 670px;
}

.title_banner_footer {
  font-weight: lighter;
}

.social_media_footer {
  width: 200px;
  margin-left: 0.4rem;
}

.box_search_banner_footer {
  width: 360px;
  background-color: white;
}

.box_search_banner_footer input {
  width: 300px;
  padding-right: 1rem;
  outline: none;
}

.box_search_banner_footer button {
  background-color: #ec1c24;
  color: white;
  padding: 0.7rem 1.2rem;
}

.box_search_banner_footer button:hover {
  color: white;
  background: red;
}

@media screen and (max-width: 1000px) {
  .notification_footer_box h4 {
    margin-right: 3.5rem;
  }
  .box_search_banner_footer{
    width: 370px;
    margin-right: 1rem;
    margin-top: .7rem;
  }
  .box_search_banner_footer input{
    padding: .5rem;
  }
  .box_search_banner_footer button {
    display: none;
  }
  .social_media_footer{
    margin-right: 6rem;
    margin-top: 1rem;
  }
}
</style>
