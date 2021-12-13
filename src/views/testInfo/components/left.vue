<template>
    <div>
        left
    </div>
</template>

<script>
export default {
    name: 'WebGqqLeft',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    beforeRouteEnter(to, from, next){
        console.log('1111test.....', to)
        next();
    }
};
</script>

<style lang="" scoped>
    
</style>