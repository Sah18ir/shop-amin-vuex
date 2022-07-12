<template>
  <div class="detail_footer">
    <article class="box_detail_footer">
      <ul class="list_icons_footer">
        <li class="S-displa-flex">
          <img
            src="https://s6.uupload.ir/files/icons8-wi-fi-32_6ud7.png"
            alt=""
            class="image_list_icons_footer"
          />
          <div>
            <router-link to="/"><h5>تازه‌ترین اخبار</h5></router-link>
            <h5 class="desc_title_detail_footer_res">تازه‌ترین اخبار و اطلاعیه های نوین‌چرم</h5>
          </div>
        </li>
        <li class="S-displa-flex">
          <img
            src="https://s6.uupload.ir/files/icons8-play-button-circled-24_sg68.png"
            alt=""
            class="image_list_icons_footer"
          />
          <div>
            <router-link to="/"><h5>چند رسانه ای</h5></router-link>
            <h5 class="desc_title_detail_footer_res">تصاویر ، ویدئو و کاتولوگ ها</h5>
          </div>
        </li>
        <li class="S-displa-flex">
          <img
            src="https://s6.uupload.ir/files/icons8-info-24_adte.png"
            alt=""
          />
          <router-link to="/"><h5 class="S-mar-right-half S-mar-top-min">درباره نوین چرم</h5></router-link>
        </li>
        <li class="S-displa-flex">
          <img
            src="https://s6.uupload.ir/files/icons8-call-24_rwt3.png"
            alt=""
          />
          <router-link to="/"><h5 class="S-mar-right-half S-mar-top-min">تماس با ما</h5></router-link>
        </li>
      </ul>
      <ul>
        <li>
          <router-link to="/"><h4>خدمات مشتریان</h4></router-link>
        </li>
        <ul class="S-mar-top-half-reg list_detail_footer">
          <li v-for="(item, index) in descfooter" :key="index">
            <router-link to="/"
              ><h5>{{ item.servent }}</h5></router-link
            >
          </li>
        </ul>
      </ul>
      <ul>
        <li>
          <router-link to="/"><h4>با نوین چرم</h4></router-link>
        </li>
        <ul class="S-mar-top-half-reg list_detail_footer">
          <li v-for="(item, index) in descfootertwo" :key="index">
            <router-link to="/"
              ><h5>{{ item.withus }}</h5></router-link
            >
          </li>
        </ul>
      </ul>
      <ul>
        <li>
          <router-link to="/"><h4>راهنمای خرید آنلاین</h4></router-link>
        </li>
        <ul class="S-mar-top-half-reg list_detail_footer">
          <li v-for="(item, index) in descfooterthree" :key="index">
            <router-link to="/"
              ><h5>{{ item.rules }}</h5></router-link
            >
          </li>
        </ul>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  name: "NovincharmDetailsfooter",

  data() {
    return {
      descfooter: [
        {
          servent: "سوالات متداول",
        },
        {
          servent: "خدمات پس از فروش",
        },
        {
          servent: "شارژ کارت بانک مشتریان",
        },
        {
          servent: "نگهداری از محصولات چرمی",
        },
        {
          servent: "شیوه تعویض و عودت محصول",
        },
      ],
      descfootertwo: [
        {
          withus: "فروش سازمانی",
        },
        {
          withus: "آدرس فروشگاه ها",
        },
        {
          withus: "همکاری با ما",
        },
        {
          withus: "چرم بلاگ",
        },
      ],
      descfooterthree: [
        {
          rules: "شرایط و مقررات",
        },
        {
          rules: "نحوه ثبت سفارش",
        },
        {
          rules: "روش های پرداخت سفارش",
        },
        {
          rules: "شیوه های ارسال سفارش",
        },
        {
          rules: "پیگیری سفارش آنلاین",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.detail_footer {
  width: 100%;
  background-color: white;
}

.box_detail_footer {
  width: 95.5%;
  display: grid;
  margin: 0 auto;
  padding: 2.5rem 0;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.box_detail_footer h5 {
  color: #58595B;
  font-weight: lighter;
}

.box_detail_footer h5:hover {
  color: red;
  transition: 0.4s all ease-in-out;
}

.box_detail_footer h4:hover {
  color: red;
  transition: 0.4s all ease-in-out;
}

.box_detail_footer h4{
  color: #58595B;
}

.box_detail_footer div {
  margin-right: 0.5rem;
  margin-top: 0.3rem;
}

.list_detail_footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.box_detail_footer ul li {
  list-style-type: none;
}

.list_icons_footer {
  display: flex;
  flex-direction: column;
  gap: 18.2px;
}

.image_list_icons_footer {
  width: 24px;
  height: 24px;
}

@media screen and (max-width: 1000px) {
  .box_detail_footer ul{
    margin-top: 1.5rem;
  }
  .box_detail_footer {
    padding: 0;
  }
  .desc_title_detail_footer_res{
    display: none;
  }
}
</style>
