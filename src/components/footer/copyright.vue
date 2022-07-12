<template>
    <div class="copyright_footer">
        <article>
            <h5>.All Rights Reserved .نوین چرم .Copyright © 2022</h5>
            <router-link to="/"><img src="https://s6.uupload.ir/files/ham3d_80k.png" alt="طرحی سایت"></router-link>
        </article>
    </div>
</template>

<script>
export default {
    name: 'NovincharmCopyright',

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

.copyright_footer{
    margin-top: 2rem;
    border-top: 1px solid #EEEEEE;
}

.copyright_footer article{
    width: 97%;
    display: flex;
    color: #666;
    padding: 1.5rem 0;
    justify-content: left;
}

.copyright_footer h5{
    margin-top: .1rem;
    margin-left: .5rem;
    font-weight: lighter;
}

</style>