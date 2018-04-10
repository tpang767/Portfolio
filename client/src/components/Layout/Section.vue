<template>
   <section class="section">
        <slot name="title">
        </slot>

        <slot name="content">
        </slot>
    </section>
</template>

<script>
export default {
    name: 'Section'
}
</script>

<style lang="scss">
.section {
    padding: 3em;
    min-height: 100vh;
    width: 100%;

    .title{
        font-size: 1.5em;
        margin-bottom: 2em;
    }
}
</style>
