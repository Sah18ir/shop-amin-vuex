<template>
  <main>
    <section>
        <slidertimetop/>
        <sliderproducts/>
        <galleryimages-main/>
        <find-stores-main/>
        <newsandvideo/>
    </section>
  </main>
</template>

<script>
import FindStoresMain from './findStoresMain.vue';
import GalleryimagesMain from './galleryimagesMain.vue';
import Newsandvideo from './newsandvideo.vue';
import Sliderproducts from './sliderproducts.vue';
import Slidertimetop from './slidertimetop.vue';
export default {
  components: { Slidertimetop, Sliderproducts, GalleryimagesMain, FindStoresMain, Newsandvideo },
  name: "NovincharmMainpage",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
