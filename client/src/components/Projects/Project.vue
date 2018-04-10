<template>
    <div class="project">
        <div class="preview">
            <div class="card">
                <img :src="item.image" alt="Avatar" class="image">
                <div class="middle">
                    <div class="text">
                        <router-link :to="{name: 'Project', params: {name: `${item.title}`}}" class="projectLink">
                            View Project
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="description">
            <h1>
                {{item.title}}
            </h1>
            <h3>
                {{item.subtitle}}
            </h3>
            <ul class="details" v-for="detail in item.details">
                <li>{{detail}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Project',
        props: {
            item: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss">
    .project {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        .description {
            width:50%;
        }
        .preview {
            width:50%;
        }
    }
    
    ul.details {
        list-style-type: none;
        li {
            line-height: 1.4em;
            font-size: 1.2em;
            text-transform: none;
            font-weight: normal;
        }
    }
    
    .card {
        position: relative;
        width: 380px;
        height: 220px;
        .image {
            opacity: 1;
            display: block;
            width: 100%;
            height: 100%;
            transition: .5s ease;
            backface-visibility: hidden;
            z-index: -1;
        }
        .middle {
            transition: .5s ease;
            opacity: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            text-align: center;
            .text {
                background-color: #4CAF50;
                color: white;
                font-size: 16px;
                padding: 16px 32px;
            }
        }
         :hover {
            cursor: pointer;
            &.image {
                opacity: 0.3;
            }
            &.middle {
                opacity: 1;
            }
        }
    }
</style>
