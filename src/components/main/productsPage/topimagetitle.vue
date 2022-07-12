<template>
    <div class="top_image_title_products">
       <section> 
        <div class="box_into_image_title_products">
            <h2>کت مردانه</h2>
            <div>
            <router-link to="/">
                <h5>صفحه اصلی / محصولات / اقایان / کت مردانه</h5>
            </router-link>
            </div>
        </div>
        <img src="https://s6.uupload.ir/files/1649576501_(1)_dmtg.jpg" alt="">
       </section> 
    </div>
</template>

<script>
export default {
    name: 'NovincharmTopimagetitle',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style>

.top_image_title_products{
    margin: 0 auto;
    width: 94.6%;
    position: relative;
}

.top_image_title_products img{
    width: 100%;
    height: 300px;
}

.box_into_image_title_products{
    padding: 1rem;
    background: white;
    position: absolute;
    right: 40%;
    top: 30%;
    width: 300px;
    text-align: center;
}

.box_into_image_title_products div{
    word-spacing: 5px;
    margin-top: .5rem;
}

.box_into_image_title_products h2{
    font-size: 38px;
    color: #58595B;
}

.box_into_image_title_products h5{
    font-weight: lighter;
}

@media screen and (max-width: 1000px) {
  .box_into_image_title_products{
    right: 13%;
  }
}

</style>