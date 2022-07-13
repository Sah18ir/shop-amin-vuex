<template>
  <div class="top_image_title_products">
    <section>
      <div class="box_into_image_title_products">
        <h2>لباس زنانه</h2>
        <div>
          <router-link to="/">
            <h5>صفحه اصلی / محصولات / خانم ها / لباس زنانه</h5>
          </router-link>
        </div>
      </div>
      <img
        src="https://s6.uupload.ir/files/76850_fullimage_fashion_shoppen_amsterdam_interior_pek_amp_kleren_foto_marie_charlotte_pezé_via_i_amsterdam_mediabank_1360x430_0_y8w3.jpg"
        alt=""
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "NovincharmTopimagetitle",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.top_image_title_products {
  margin: 0 auto;
  width: 94.6%;
  position: relative;
}

.top_image_title_products img {
  width: 100%;
  height: 300px;
}

.box_into_image_title_products {
  width: 310px;
  padding: 1rem;
  top: 30%;
  right: 40%;
  background: white;
  position: absolute;
  text-align: center;
}

.box_into_image_title_products div {
  word-spacing: 5px;
  margin-top: 0.5rem;
}

.box_into_image_title_products h2 {
  font-size: 38px;
  color: #58595b;
}

.box_into_image_title_products h5 {
  font-weight: lighter;
}

@media screen and (max-width: 1000px) {
  .box_into_image_title_products {
    right: 13%;
  }
}
</style>
