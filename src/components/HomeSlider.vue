<template>
  <swiper class="m-slider -hero" :pagination="true" :navigation="true" :modules="modules" :slides-per-view="1">
    <swiper-slide class="m-slider__slide" v-for="slide in sliderData" :key="slide.id" :style="{'background-image': `url(${slide.imagePath})`}">
    </swiper-slide>
    <div class="m-slider__title">{{ title }}</div>
  </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

export default {

    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        
        return {
            modules: [Pagination, Navigation]
        }
    },

    data() {

        return {
            title: "Lorem ipsum dolor sit",
            sliderData: [
                {
                    "id": 1,
                    "imagePath": require('@/assets/images/slider-image.png')
                },
                {
                    "id": 2,
                    "imagePath": require('@/assets/images/slider-image.png')
                },
                {
                    "id": 3,
                    "imagePath": require('@/assets/images/slider-image.png')
                }
            ],
        }
    }
}
</script>

<style>
</style>