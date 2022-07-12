<template>
    <footer>
        <newsbanner/>
        <detailsfooter/>
        <ebuy/>
        <copyright/>
    </footer>
</template>

<script>
import Copyright from './copyright.vue';
import Detailsfooter from './detailsfooter.vue';
import Ebuy from './ebuy.vue';
import Newsbanner from './newsbanner.vue';
export default {
    name: 'NovincharmPagefooter',
    components:{ Newsbanner, Detailsfooter, Ebuy, Copyright },
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