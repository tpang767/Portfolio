<template>
    <div id="homepage" class="pg-flex animated fadeIn fullpage">
        <div class="pg-container jumbotron animated bg-cover">
            <div class="header">
                <h1 style="margin-bottom:20px; color:white;">Hello,</h1>
                <h1>my name is <span class="black">thomas </span>and</h1>
                <h1>i am a <span class="black">web developer</span></h1>
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
#homepage{
    background:black;
}
@keyframes animateBackground {
    from { background-position: 0 0; }
    to { background-position: -1920px; }
}
.bg-cover {
    background-position:50% 50% !important;
    background-size: cover !important;
    overflow:hidden;
    width: 100%;
    height: 100%;
    background: url('../../assets/images/backgrounds/particles.jpg');
    &.animated {
        animation: animateBackground 60s linear infinite;
    }
    &.particles {
        width:1920px;
        // background-size: 400px auto;
        background: url('../../assets/images/backgrounds/particles.jpg') repeat;
    }
}

.align-center{
    align-items:center;
}
.justify-center{
    justify-content:center;
}
.centered{
   justify-content:center;
   align-items:center; 
}
.black{
    color: rgb(248, 248, 248);
    // color:white;
    // color:black;
}
.white{
    color:white;
}
.jumbotron {
    display:flex;
   justify-content:center;
   align-items:center;
//    text-align:center;
    .header{
        padding:2vw;
        border:3px solid white;
        >* {
            text-transform:uppercase;
            font-weight:900;
            color: #2c3e50;
            letter-spacing:10px;
            margin:0;
        }
    }

}
   





</style>
