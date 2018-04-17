<template>
    <nav class="navbar">
        <a href="#"  v-for="navLink in navLinks" v-scroll-to="`#${navLink.target}`">
            <div class="filler"></div>
            <span class="nav-name">{{navLink.name}}</span>
        </a>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        navLinks: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>

</style>
