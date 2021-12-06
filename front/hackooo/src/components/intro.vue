<template>
    <div style="height: 1200px;">

        <div class="ghost text-center" style="width: 156px; margin-left: 47%">
            <lottie-animation
                    path="animation.json"
                    :width="156"
                    style=" position: relative; right: 47%"
                    :height="156"/>
        </div>

        <!--        <div class="row mt-5">-->
        <!--            <div class="col-lg-3 col-md-2 "></div>-->
        <!--            <div class="col-lg-6 col-md-8 ">-->
        <!--                <h1>Beginning</h1>-->
        <!--                <p>Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor-->
        <!--                    expression unpleasing she led met.-->
        <!--                    Estate was tended ten boy nearer seemed As so seeing latter he should thirty whence. Steepest-->
        <!--                    speaking up attended it as-->
        <!--                    Made neat an on be gave show snug tore.</p>-->
        <!--                <p class="mt-4">-->
        <!--                    Written enquire painful ye to offices forming it. then so does over sent dull on. Likewise offended-->
        <!--                    humoured mrs fat trifling answered.-->
        <!--                    On ye position greatest so desireous. So wound stood guest weeks no terms up ought. By so these am-->
        <!--                    so rapid blush songs begin.-->
        <!--                    Nor but mean time one over.-->
        <!--                </p>-->
        <!--                <br><br><br><br><br><br><br><br>-->
        <!--                <h1>Beginning</h1>-->
        <!--                <p>Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor-->
        <!--                    expression unpleasing she led met.-->
        <!--                    Estate was tended ten boy nearer seemed As so seeing latter he should thirty whence. Steepest-->
        <!--                    speaking up attended it as-->
        <!--                    Made neat an on be gave show snug tore.</p>-->
        <!--                <p class="mt-4">-->
        <!--                    Written enquire painful ye to offices forming it. then so does over sent dull on. Likewise offended-->
        <!--                    humoured mrs fat trifling answered.-->
        <!--                    On ye position greatest so desireous. So wound stood guest weeks no terms up ought. By so these am-->
        <!--                    so rapid blush songs begin.-->
        <!--                    Nor but mean time one over.-->
        <!--                </p>-->
        <!--            </div>-->
        <!--            <div class="col-lg-3 col-md-2"></div>-->
        <!--        </div>-->

    </div>
</template>

<script>
    import Lottie from "vue-lottie";
    import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
    import gsap from "gsap";
    import ScrollTrigger from 'gsap/ScrollTrigger';
    import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
    import MotionPathPlugin from "gsap/MotionPathPlugin";


    export default {
        name: "Intro",
        components: {
            Lottie,
            LottieAnimation
        },
        props: {},
        mounted() {
            gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
            gsap.defaults({ease: "none"});
            gsap.set('.ghost', {yPercent:50})

            let tl = gsap.timeline({
            });

        }
    };
</script>

<style scoped>


</style>
