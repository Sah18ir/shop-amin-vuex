<template>
    <main>
        <topimagetitle/>
        <div class="box_filte_and_production">
            <filteraside/>
            <production/>
        </div>
    </main>
</template>

<script>

import Filteraside from './filteraside.vue';
import Production from './production.vue';
import topimagetitle from './topimagetitle.vue';
export default {
  components: { topimagetitle, Filteraside, Production },
    name: 'NovincharmProductpagemain',

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

.box_filte_and_production{
    width: 75%;
    margin: 0 auto;
    display: flex;
}

</style>