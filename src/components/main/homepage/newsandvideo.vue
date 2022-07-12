<template>
  <div class="newsvideopart_main_page S-pad-bot-large">
    <h2>اخبار و ویدیو ها</h2>
    <section class="S-pad-bot-large">
      <article class="S-all-flex S-flex-wrap">
        <div class="video_slider_part">
        <router-link to="/">
          <div class="box_image_zoom_hover">
            <img src="https://s6.uupload.ir/files/1623141466_i40b.jpg" alt="" />
          </div>
          <h3>امکان تحویل سفارش در 3 ساعت در شهر تهران فراهم شد.</h3>
        </router-link>
          <h5>۲۴ تير ۱۳۹۶</h5>
        </div>
        <div class="video_slider_part">
        <router-link to="/">
          <div class="box_image_zoom_hover">
            <img src="https://s6.uupload.ir/files/1653452965_ph9w.jpg" alt="" />
          </div>
          <h3>بزرگترین اوت‌لت کفش چرم این‌بار در کرمانشاه</h3>
        </router-link>
          <h5>۴ خرداد ۱۴۰۱</h5>
        </div>
        <div class="video_slider_part">
        <router-link to="/">
          <div class="box_image_zoom_hover">
            <img src="https://s6.uupload.ir/files/1586771929_eyjc.jpg" alt="" />
          </div>
          <h3>بزرگترین اوت‌لت کفش چرم این‌بار در کرمانشاه</h3>
        </router-link>
          <h5>۴ خرداد ۱۴۰۱</h5>
        </div>
        <!-- <flickity class="carousel-newandvideo_main" :options="flickityOptions">
          <div
            class="carousel-cell-newandvideo_main"
            v-for="(item, index) in slidernewsvideo"
            :key="index"
          >
            <router-link :to="item.route">
              <div class="box_image_zoom_hover">
                <img
                  :src="item.image"
                  alt=""
                  class="images_slider_videos_news_main"
                />
                <div class="circle_video_onimage_slider">
                  <img src="https://s6.uupload.ir/files/icons8-play-24_8nfp.png" alt="">
                </div>
                <h3>{{item.titlevideo}}</h3>
              </div>
            </router-link>
          </div>
        </flickity> -->
      </article>
    </section>
    <div class="line_seprate_main_page"></div>
  </div>
</template>

<script>
// import Flickity from "vue-flickity";

export default {
  name: "NovincharmNewsandvideo",
  // components: { Flickity },

  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        autoPlay: 3500,
        pauseAutoPlayOnHover: false,
        lazyLoad: true,
      },
      slidernewsvideo:[
        {
          route:"/",
          titlevideo:"روز پزشک مبارک",
          image:"https://s6.uupload.ir/files/1629724553_yywc.png"
        },
        {
          route:"/",
          titlevideo:"روز پدر مبارک",
          image:"https://s6.uupload.ir/files/1614522993_3hj4.png"
        },
        {
          route:"/",
          titlevideo:"مادر قصه مهربانی را روایت می کند",
          image:"https://s6.uupload.ir/files/1612276810_24.jpg"
        },
        {
          route:"/",
          titlevideo:"برگزاری مراسم یادبود استاد شجریان در تهران",
          image:"https://s6.uupload.ir/files/1602510538_kg03.jpg"
        },
        {
          route:"/",
          titlevideo:"در خانه بمانیم و نوین خرید کنیم",
          image:"https://s6.uupload.ir/files/1586771929_eyjc.jpg"
        },
      ]
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.newsvideopart_main_page h2 {
  color: red;
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  word-spacing: 5px;
}

.newsvideopart_main_page article {
  width: 94.2%;
  margin: 0 auto;
}

.newsvideopart_main_page article .box_image_zoom_hover {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 450px;
}

.video_slider_part img {
  max-width: 100%;
  transition: all 0.3s;
  display: block;
  width: 100%;
  height: auto;
  transform: scale(1);
}

.video_slider_part:hover img {
  transform: scale(1.1);
  transition: 1.5s all ease-in-out;
}

.video_slider_part:hover h3{
  color: red;
  transition: 0.3s all ease-in-out;
}

.newsvideopart_main_page h3 {
  font-size: 18px;
  font-weight: lighter;
  word-spacing: 3px;
  color: #58595b;
  line-height: 2;
  margin-top: 0.5rem;
}

.newsvideopart_main_page h5 {
  font-weight: lighter;
  font-size: 17px;
  margin-top: 0.5rem;
}

.line_seprate_main_page {
  width: 94.2%;
  padding: 0.3rem 0;
  margin: 2.5rem auto;
  background-color: #f2f2f2;
}

.carousel-newandvideo_main {
  background: #fafafa;
  width: 31.4%;
  height: 52.1vh;
  background: transparent;
}

.carousel-cell-newandvideo_main {
  width: 100%;
  height: 100%;
  margin-right: 10px;
  background: transparent;
  border-radius: 5px;
  counter-increment: carousel-cell;
}  

.carousel-cell-newandvideo_main .images_slider_videos_news_main {
  display: flex;
  justify-content: center;
  width: 100%;
  transform: scale(1);
  transition: 1.5s all ease-in-out;
  max-width: 100%;
  filter: brightness(67%);
}

.carousel-cell-newandvideo_main:hover .images_slider_videos_news_main{
  transform: scale(1.1);
  transition: 1.5s all ease-in-out;
  filter: brightness(50%);
}

.carousel-cell-newandvideo_main h3 {
  position: relative;
}

.carousel-cell-newandvideo_main:hover h3 {
  color: red;
  transition: 0.3s all ease-in-out;
}

.flickity-page-dots {
  bottom: -5%;
  left: -1%;
  width: 140px;
}

.flickity-page-dots .dot {
  width: 12px;
  height: 12px;
  opacity: 1;
  background: transparent;
  border: 2px solid #707070;
}

.flickity-page-dots .dot.is-selected {
  background: red;
}

.circle_video_onimage_slider{
  border: 2px solid white;
  border-radius: 100%;
  position: absolute;
  top: 28%;
  left: 40%;
  padding: 1.5rem 2rem;
  background: transparent;
}

.circle_video_onimage_slider img{
  width: 30px;
  margin-top: .5rem;
}

@media screen and (max-width: 1000px) {
  .newsvideopart_main_page article {
    width: 100%;
  }
  .carousel-newandvideo_main{
    width: 100%;
    margin-top: 3rem;
  }
  .video_slider_part{
    margin-top: 3rem;
    display: inline-flex;
    margin-right: 1.5rem;
  }
  .video_slider_part h3{
    font-size: 17px;
  }
  .newsvideopart_main_page article .box_image_zoom_hover {
    position: relative;
    margin: auto;
    overflow: hidden;
    width: 280px;
    display: inline-flex;
  }
  .carousel-newandvideo_main{
    height: 28vh;
    width: 100%;
    display: none;
  }
}
</style>
