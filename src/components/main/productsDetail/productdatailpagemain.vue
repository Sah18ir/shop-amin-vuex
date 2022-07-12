<template>
    <div>
        <buyproduct/>
        <sliderdetailproduct/>
        <commentsproductdetail/>
    </div>
</template>

<script>
import buyproduct from './buyproduct.vue';
import Commentsproductdetail from './commentsproductdetail.vue';
import Sliderdetailproduct from './sliderdetailproduct.vue';
export default {
  components: { buyproduct, Sliderdetailproduct, Commentsproductdetail },
    name: 'NovincharmProductdatailpagemain',

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

<style lang="scss" scoped>

</style>