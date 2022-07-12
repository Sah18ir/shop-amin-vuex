<template>
  <div class="gallery_main_page">
    <!-- <h2>گالری تصاویر</h2>
    <article>
      <flickity class="carousel-gallery" :options="flickityOptions">
        <div
          class="carousel-cell-gallery"
          v-for="(item, index) in listgalleryimages"
          :key="index"
        >
        <router-link to="/">
        <div class="box_image_gallery_main_zoom">
          <img :src="item.image" alt="" />
          </div>
        </router-link>
        </div>
      </flickity>
    <router-link to="/">
      <h4>مشاهده همه</h4>
    </router-link>
    </article> -->
  </div>
</template>

<script>
// import Flickity from "vue-flickity";

export default {
  name: "NovincharmGalleryimagesMain",
  // components: { Flickity },

  data() {
    return {
      flickityOptions: {
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        autoPlay: 4500,
        pauseAutoPlayOnHover: false,
        pauseAutoPlayOnClick: false,
        lazyLoad: true
      },
      listgalleryimages: [
        {
          image: "https://s6.uupload.ir/files/1649662529_hjjx.jpg",
        },
        {
          image: "https://s6.uupload.ir/files/1649663228_8r8b.jpg",
        },
        {
          image: "https://s6.uupload.ir/files/1649662961_lsof.jpg",
        },
        {
          image: "https://s6.uupload.ir/files/1649662728_sy2a.jpg",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.gallery_main_page h2 {
  color: red;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  padding-bottom: 3rem;
}

.gallery_main_page h4 {
  font-weight: lighter;
  display: flex;
  justify-content: center;
}

.gallery_main_page h4:hover {
  color: red;
  transition: .5s all ease-in-out;
}

.carousel-gallery {
  background: transparent;
  width: 94.2%;
  margin: 0 auto;
}

.carousel-cell-gallery {
  width: 60%;
  height: 600px;
  margin-right: 10px;
  counter-increment: carousel-cell;
}

.gallery_main_page .flickity-button {
  background: #eb1c23;
  color: white;
  width: 70px;
  height: 70px;
  border-radius: 0;
}

.flickity-prev-next-button.previous {
  left: 0;
  top: 60%;
}
.flickity-prev-next-button.next {
  right: 0;
  top: 60%;
}

.gallery_main_page .flickity-button .flickity-button-icon {
  width: 18px;
  right: 35%;
}

.gallery_main_page .carousel-cell-gallery img {
  width: 96%;
  height: 90%;
}

.gallery_main_page .carousel-cell-gallery img:hover {
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1);
  transition: 1.5s all ease-in-out;
}

@media screen and (max-width: 1000px) {
  .gallery_main_page{
    display: none;
  }
}
</style>
