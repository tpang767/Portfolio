<template>
    <section class="section-container" id="skills">
        <h1 class="section-title">Skills</h1>
        <div class="content-block">
            <template v-for="skill in skills">
                <h3 class="title">{{skill.title}}</h3>
                <div class="skill">
                    <div class="item" v-for="item in skill.items">
                        <img :src="`${item.img}`" class="image-logo">
                        <div class="title">
                            {{item.name}}
                        </div>
                    </div>
                </div>
</template>
    </div>
</section>
</template>

<script>
    export default {
        name: 'Skills',
        props: {
            skills: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style>
    
</style>
