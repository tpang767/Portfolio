<template>
   <div class="app-body">
       <slot>
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'AppBody'
    }
</script>

<style lang="scss">
.app-body {
    width:100%;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
}
</style>
