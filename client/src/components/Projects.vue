<template>
<section class="section-container" id="projects">
    <h1 class="section-title">Recent Work</h1>
    <div class="project" v-for="project in projects">
        <div class="description">
            <h1> {{project.title}} </h1>
            <h2> {{project.subtitle}} </h2>
            <p> {{project.description}}</p>
            <w-button style="margin-top:1rem;">View Project</w-button>
        </div>
        <div class="preview">
            <img :src="`${project.image}`" class="preview-image">
        </div>
    </div>
</section>
</template>

<script>
import Button from './Buttons/Button'

export default {
    name: 'Projects',
    components: {
        'w-button': Button
    },
    props: {
        projects: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>

</style>
