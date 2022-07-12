<template>
  <div>
    <!-- <div>
      <router-link to="/" class="title_slider_products">
        <h4
          @click="gendercolormale()"
          id="genderslider"
          :class="['red', { active: isSet }]"
          v-on:click="showMessage = !showMessage"
        >
          آقایان
        </h4>
        <h4
          @click="gendercolor()"
          id="genderslidergirl"
          :class="{ active: isSet }"
          v-on:click="(showMessage = false), (showMessage2 = true)"
        >
          خانم ها
        </h4>
      </router-link>
    </div> -->
    <!-- <section class="S-sec_main_comments_main">
      <article class="S-flickity_main_comments"> -->
        <!-- <flickity class="carouselproduct" :options="flickityOptions"> -->
          <!-- <div
            class="carousel-cell-product"
            v-for="(item, index) in listproductsmen"
            :key="index"
          >
            <router-link :to="item.route"> -->
              <!-- <div v-if="showMessage"> -->
              <!-- <img :src="item.image" alt="" />
              <div class="border_images_slider_products"></div>
              <p>{{ item.desc }}</p> -->
              <!-- </div> -->
            <!-- </router-link> -->
          <!-- </div>
          <div
            class="carousel-cell-product"
            v-for="(item, index) in listproductswomen"
            :key="index"
          >
            <router-link :to="item.route">
              <div v-if="showMessage2">
                <img :src="item.image" alt="" />
                <div class="border_images_slider_products"></div>
                <p>{{ item.desc }}</p>
              </div>
            </router-link>
          </div> -->
        <!-- </flickity> -->
      <!-- </article>
    </section> -->
  </div>
</template>

<script>
// import Flickity from "vue-flickity";

export default {
  name: "NovincharmSliderproducts",
  // components: { Flickity },
  data() {
    return {
      isSet: false,
      showMessage: false,
      showMessage2: false,
      flickityOptions: {
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        autoPlay: 5500,
        pauseAutoPlayOnHover: false,
        cellAlign: "center",
        lazyLoad: true,
      },
      listproductsmen: [
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1607319408_(1)_5u3v.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1644065486_(1)_1g04.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1644065617_(1)_32u6.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1644065776_uwj3.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1644749413_(1)_exwz.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1644325579_(1)_rt5.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1644066088_y53k.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1646218967_(1)_pi5z.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1645534714_(1)_v03.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1647152932_(1)_wjb.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1607319408_(1)_5u3v.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1644065486_(1)_1g04.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1644065617_(1)_32u6.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1644065776_uwj3.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1644749413_(1)_exwz.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1644325579_(1)_rt5.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1644066088_y53k.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1646218967_(1)_pi5z.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1645534714_(1)_v03.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1647152932_(1)_wjb.jpg",
          route: "productsPage",
        },
      ],
      // listproductswomen: [
      //   {
      //     desc: "کیف اداری ماکان BE5091",
      //     image: "https://s6.uupload.ir/files/1606216160_(1)_0k7o.jpg",
      //     route: "productsPage",
      //   },
      //   {
      //     desc: "کیف اداری ماکان BE5091",
      //     image: "https://s6.uupload.ir/files/1644067192_4cku.jpg",
      //     route: "productsPage",
      //   },
      //   {
      //     desc: "کیف اداری ماکان BE5091",
      //     image: "https://s6.uupload.ir/files/1644736695_4s7k.jpg",
      //     route: "productsPage",
      //   },
      //   {
      //     desc: "کیف اداری ماکان BE5091",
      //     image: "https://s6.uupload.ir/files/1645248917_l70y.jpg",
      //     route: "productsPage",
      //   },
      //   {
      //     desc: "کیف اداری ماکان BE5091",
      //     image: "https://s6.uupload.ir/files/1606216160_(1)_0k7o.jpg",
      //     route: "productsPage",
      //   },
      //   {
      //     desc: "کیف اداری ماکان BE5091",
      //     image: "https://s6.uupload.ir/files/1644067192_4cku.jpg",
      //     route: "productsPage",
      //   },
      //   {
      //     desc: "کیف اداری ماکان BE5091",
      //     image: "https://s6.uupload.ir/files/1644736695_4s7k.jpg",
      //     route: "productsPage",
      //   },
      //   {
      //     desc: "کیف اداری ماکان BE5091",
      //     image: "https://s6.uupload.ir/files/1645248917_l70y.jpg",
      //     route: "productsPage",
      //   },
      // ],
    };
  },

  mounted() {},

  methods: {
    gendercolor() {
      this.isSet = !this.isSet;
      document.getElementById("genderslider").style =
        "color:#66666b;border-bottom:0";
      document.getElementById("genderslidergirl").style =
        "color:red;border-bottom:2.3px solid red";
    },
    gendercolormale() {
      document.getElementById("genderslider").style =
        "color:red;border-bottom:2.3px solid red";
      document.getElementById("genderslidergirl").style =
        "color:#66666b;border-bottom:0";
    },
  },
};
</script>

<style>
.S-sec_main_comments_main {
  margin-top: 4rem;
}

.S-sec_main_comments_main .carouselproduct {
  width: 94.2%;
  margin: 0 auto;
  background: transparent;
}

.S-sec_main_comments_main .carousel-cell-product {
  width: 14%;
  height: 310px;
  margin-right: 10px;
  background: transparent;
  counter-increment: carousel-cell;
}

.S-sec_main_comments_main .carousel-cell-product p {
  color: #58595b;
  font-size: medium;
  text-align: center;
  font-weight: bolder;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}

.S-sec_main_comments_main .carousel-cell-product:hover p {
  color: red;
  transition: 0.3s all ease-in-out;
}

.S-sec_main_comments_main .carousel-cell-product img {
  width: 95%;
  height: 85%;
}

.S-sec_main_comments_main .flickity-button {
  background: #eb1c23;
  color: white;
  width: 70px;
  height: 70px;
  border-radius: 0;
}

.flickity-prev-next-button.previous {
  left: 0;
  top: 43%;
}
.flickity-prev-next-button.next {
  right: 0;
  top: 43%;
}

.S-sec_main_comments_main .flickity-button .flickity-button-icon {
  width: 18px;
  right: 35%;
}

.title_slider_products {
  width: 120px;
  display: flex;
  margin: 3rem auto;
  justify-content: space-between;
}

.title_slider_products h4 {
  font-weight: lighter;
  position: absolute;
  color: #66666b;
}

.title_slider_products h4:nth-child(2) {
  left: 45%;
}

.title_slider_products h4:hover {
  color: red;
  border-bottom: 2.3px solid red;
}

#genderslider {
  color: red;
}

.red {
  color: red;
  border-bottom: 2.3px solid red;
}

.active {
  color: red;
  border-bottom: 2.3px solid red;
}

.border_images_slider_products {
  border-top: 4px solid red;
  width: 95%;
  position: absolute;
  bottom: 10%;
  display: none;
}

.S-sec_main_comments_main
  .carousel-cell-product:hover
  .border_images_slider_products {
  display: block;
  transition: 3s all ease-in-out;
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1);
  transition: 1.5s all ease-in-out;
}

.S-sec_main_comments_main .carousel-cell-product img:hover {
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1);
  transition: 1.5s all ease-in-out;
}

@media screen and (max-width: 1000px) {
  .title_slider_products h4:nth-child(2) {
    left: 35%;
  }
  .S-sec_main_comments_main .carousel-cell-product {
    width: 34.5%;
  }
}
</style>
