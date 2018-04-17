<template>
    <section class="section-container" id="contact">
        <h1 class="section-title">Contact</h1>
        <div class="content-block">
            <a :href="`${contact.path}`" class="contact" v-for="contact in contacts">
                <i :class="`fa-2x ${contact.icon}`" class="icon"></i>
                <h5 class="address">{{contact.text}}</h5>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Contacts',
    props: {
        contacts: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>

</style>
