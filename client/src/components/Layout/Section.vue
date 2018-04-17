<template>
    <section class="section">
        <div class="section-body">
            <div class="container">
                <h1 class="title">
                    Title
                </h1>
                <h2>
                    Primary Subtitle
                </h2>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Section'
    }
</script>

<style lang="scss">
    .section {
        border: 1px solid black;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        .section-body {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            padding: 3rem 1.5rem;
            .title {
                color: #363636;
                font-size: 2rem;
                font-weight: 600;
                line-height: 1.125;
            }
            .subtitle {
                color: #4a4a4a;
                font-size: 1.25rem;
                font-weight: 400;
                line-height: 1.25;
            }
        }
    }
</style>
