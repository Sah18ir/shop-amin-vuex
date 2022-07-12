<template>
  <div>
    <article class="box_ebuy_footer S-flex-wrap">
      <div class="part_credit_footer">
        <img
          src="https://s6.uupload.ir/files/icons8-credit-card-24_hyla.png"
          alt=""
        />
        <h5>پرداخت اینترنتی</h5>
      </div>
      <div class="part_credit_footer">
        <img
          src="https://s6.uupload.ir/files/icons8-truck-26_7b4o.png"
          alt=""
        />
        <h5>ارسال سفارش</h5>
      </div>
      <div class="S-width-twohun S-all-flex">
        <router-link to="/">
          <div class="box_image_ebuy_footer">
            <img
              class="ebay_namad_image"
              src="https://s6.uupload.ir/files/logo_ebu0.png"
              alt=""
            />
          </div>
        </router-link>
        <router-link to="/">
          <div class="box_image_ebuy_footer">
            <img
              class="ebay_procces_image"
              src="https://s6.uupload.ir/files/logo_(1)_08kv.png"
              alt=""
            />
          </div>
        </router-link>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "NovincharmEbuy",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.box_ebuy_footer {
  width: 97%;
  gap: 20px;
  color: gray;
  display: flex;
  justify-content: left;
  align-items: flex-start;
}

.box_ebuy_footer h5 {
  font-weight: lighter;
}

.box_image_ebuy_footer {
  background-color: #f3f3f3;
}

.ebay_namad_image {
  width: 110px;
}

.ebay_procces_image {
  width: 120px;
}

.part_credit_footer {
  margin-top: 3.9rem;
  border-radius: 5px;
  text-align: center;
  padding: 0.5rem 1rem;
  border: 0.5px solid #e0e0e0;
}

.part_credit_footer:hover {
  border: 0.5px solid darkgray;
  transition: 0.3s all ease-in-out;
}

.part_credit_footer img {
  width: 20px;
}
</style>
