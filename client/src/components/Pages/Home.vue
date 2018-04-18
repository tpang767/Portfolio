<template>
    <div id="homepage" class="fadeIn fullpage pg-flex ">
        <div class="pg-container bg-cover">
            <div class="jumbotron">
                <div class='intro'>
                    <h2>Welcome to my portfolio,</h2>
                    <h2>My name is Thomas and I'm a web developer from NYC.</h2>
                    <h3>Feel free to explore my work.</h3>
                </div>
                <!-- <div class="jumbotron"> -->
                <div class="header">
                    <!-- <h2>Thomas Pang</h2> -->
                </div>
                    <div class='intro'>
                    <!-- <h3>Feel free to explore my work</h3> -->
                </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style lang="scss">
$yellow:#F8E9A1;
$dark-blue:#24305e;
$red: #f76c6c;
$light-blue: #a8cfe7;
$aqua:#7dccbe;

$header-color: $yellow;
$border-color: white;
$intro-color: $yellow;
$bg-color: $dark-blue;
@keyframes animateBackground {
    from { background-position: 0 0; }
    to { background-position: -1920px; }
}

.full{
    height:100%;
    width: 100%;
}
.bg-cover {
    background: $bg-color url('../../assets/images/backgrounds/purple.png') no-repeat;
    height:auto;
    width:100%;
    background-position:50% 50% !important;
    background-size: cover !important;
    &.animated {
        animation: animateBackground 60s linear infinite;
    }
}


.jumbotron{
    padding:2vw;
    display: flex;
    flex-direction:column;
    justify-content:center;
    // width:50%;
    height:50%;
    align-self:center;
    margin-left:auto;
    margin-right:auto;
    // text-align:center;
}


.intro,
.header{
}

#homepage{
    // padding:2vw;
    // background-color:$light-blue;
    // background:$red;
    // background:#2c3531;s
}

.intro > *,
.header > * {
    letter-spacing:2px;
    // color: #14248A;
    color:$intro-color;
    margin:0;
    
    
}

.header{
    margin:1rem 0;
    // text-align:center;
    // padding:1vw;
    // border:2px solid $border-color;

    >*{
        color: $header-color;
        // text-transform:uppercase;
        font-size:2em;
        font-weight:900;
    }
}


.intro {
    > * {
        text-transform:uppercase;
        font-family: 'PT Sans', serif;
        letter-spacing:0.2rem;
        line-height:1.8em;
        // font-size:1.4em;
    }
}





</style>
