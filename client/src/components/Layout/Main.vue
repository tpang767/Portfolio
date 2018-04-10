<template>
    <main id="main">
        <slot>
        </slot>
    </main>
</template>

<script>
    export default {
        name: 'Main',
        data() {
            return {
                scrolled: false
            }
        },
        methods: {
            handleScroll(e) {
                console.log(e)
            }
        },
        created() {
            document.body.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            document.body.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style lang="scss">
    
</style>
