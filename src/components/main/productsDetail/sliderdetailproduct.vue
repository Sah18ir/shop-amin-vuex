<template>
  <div>
    <!-- <div class="title_slider_products_product_detail">
      <router-link to="/">
        <h3>{{titleslider}}</h3>
      </router-link>
    </div>
    <section class="S-sec_main_comments_main_product_detail">
      <article class="S-flickity_main_comments">
        <flickity class="carouselproductdetail" :options="flickityOptions">
          <div
            class="carousel-cell-product_detail"
            v-for="(item, index) in listproductsmen"
            :key="index"
          >
            <router-link :to="item.route">
              <div class="box_image_zoom_hover">
                <img :src="item.image" alt="" />
              </div>
              <div class="border_images_slider_products_detail"></div>
              <p>{{ item.desc }}</p>
            </router-link>
          </div>
        </flickity>
      </article>
    </section> -->
  </div>
</template>

<script>
// import Flickity from "vue-flickity";

export default {
  name: "NovincharmSliderproducts",
  // components: { Flickity },
  props:["titleslider"],
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
        lazyLoad: true,
        groupCells: 4,
      },
      listproductsmen: [
        {
          desc: "کت مردانه رما MNT5316",
          image: "https://s6.uupload.ir/files/1643460993_bmz1.jpg",
          route: "productsPage",
        },
        {
          desc: "کت مردانه کوین MNT5316",
          image: "https://s6.uupload.ir/files/2_thgr.jpg",
          route: "productsPage",
        },
        {
          desc: "کت مردانه جرج MNT5316",
          image: "https://s6.uupload.ir/files/3_im0w.jpg",
          route: "productsPage",
        },
        {
          desc: "کت مردانه رما MNT5316",
          image: "https://s6.uupload.ir/files/4_nshk.jpg",
          route: "productsPage",
        },
        {
          desc: "کت مردانه چیاکو MNT5316",
          image: "https://s6.uupload.ir/files/1573545237_g065.jpg",
          route: "productsPage",
        },
        {
          desc: "کت مردانه کوین MNT5316",
          image: "https://s6.uupload.ir/files/6_1sx4.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1648029182_9z76.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/8_whrz.jpg",
          route: "productsPage",
        },
        {
          desc: "کت مردانه کوین MNT5316",
          image: "https://s6.uupload.ir/files/9_rfyq.jpg",
          route: "productsPage",
        },
        {
          desc: "کت مردانه کوین MNT5316",
          image: "https://s6.uupload.ir/files/6_1sx4.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/1648029182_9z76.jpg",
          route: "productsPage",
        },
        {
          desc: "کیف اداری ماکان BE5091",
          image: "https://s6.uupload.ir/files/8_whrz.jpg",
          route: "productsPage",
        },
      ],
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
.S-sec_main_comments_main_product_detail .carouselproductdetail {
  width: 75%;
  margin: 0 auto;
  background: transparent;
}

.S-sec_main_comments_main_product_detail .carousel-cell-product_detail {
  width: 25%;
  height: 405px;
  margin-right: 10px;
  background: transparent;
  counter-increment: carousel-cell;
}

.S-sec_main_comments_main_product_detail .carousel-cell-product_detail p {
  color: #58595b;
  font-size: medium;
  text-align: center;
  font-weight: bolder;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}

.S-sec_main_comments_main_product_detail .carousel-cell-product_detail:hover p {
  color: red;
  transition: 0.3s all ease-in-out;
}

.S-sec_main_comments_main_product_detail .carousel-cell-product_detail img {
  width: 95%;
  height: 85%;
}

.S-sec_main_comments_main_product_detail .flickity-button {
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

.S-sec_main_comments_main_product_detail
  .flickity-button
  .flickity-button-icon {
  width: 18px;
  right: 35%;
}

.title_slider_products_product_detail {
  width: 81%;
  display: flex;
  margin: 3rem auto;
  padding-right: 3rem;
}

.title_slider_products_product_detail h3 {
  font-weight: lighter;
  color: red;
}

.border_images_slider_products_detail {
  border-top: 4px solid red;
  width: 95%;
  position: absolute;
  bottom: 5%;
  display: none;
}

.S-sec_main_comments_main_product_detail
  .carousel-cell-product_detail
  img:hover {
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1);
  transition: 1.5s all ease-in-out;
}
</style>
