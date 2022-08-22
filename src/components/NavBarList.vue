<template>
    <ul :class="childClass" class="m-list -nav" v-if="isMobile">
        <li v-for="item in navList" :key="item.id" class="m-list__item"><a href="#" class="m-list__item--link a-hover -color" :class="item.transition">{{ item.text }}</a></li>
    </ul>
    <ul :class="childClass" class="m-list -navIcons" v-if="isTablet">
        <li v-for="item in navList" :key="item.id" class="m-list__item"><a href="#" class="m-list__item--link a-icon a-hover -color" :class="`icon-${item.icon} ${item.transition}`"></a></li>
    </ul>
    <ul :class="childClass" class="m-list -desktopNav" v-if="isDesktop">
        <li v-for="item in navList" :key="item.id" class="m-list__item"><a href="#" class="m-list__item--link a-hover -color" :class="item.transition">{{ item.text }}</a></li>
    </ul>
</template>

<script>
export default {

    data() {

        return {

            navList: [
                {
                    "id": 1,
                    "text": "Home",
                    "slug": "#",
                    "icon": "home",
                    "transition": "-effectOne"
                },
                {
                    "id": 2,
                    "text": "About Us",
                    "slug": "#",
                    "icon": "about",
                    "transition": "-effectTwo"
                },
                {
                    "id": 3,
                    "text": "Our Work",
                    "slug": "#",
                    "icon": "our-work",
                    "transition": "-effectThree"
                },
                {
                    "id": 4,
                    "text": "Contact",
                    "slug": "#",
                    "icon": "contact",
                    "transition": "-effectFour"
                }
            ],

            isMobile: true,
            isTablet: false,
            isDesktop: false
        }
    },

    props: ['childClass'],

    methods: {

        isMobileCheck() {

            if(window.matchMedia("screen and (min-width: 320px)").matches) {
                this.isMobile = true;
                this.isTablet = false;
                this.isDesktop = false;
            }

            if(window.matchMedia("screen and (min-width: 480px) and (max-width: 767px)").matches) {
                this.isMobile = false;
                this.isTablet = true;
                this.isDesktop = false;
            }

            if(window.matchMedia("screen and (min-width: 768px)").matches) {
                this.isMobile = false;
                this.isTablet = false;
                this.isDesktop = true;
            }
        }
    },

    mounted() {
        this.isMobileCheck(); // on mount
        window.addEventListener('resize', this.isMobileCheck);
    },

    unmounted() {
        window.removeEventListener('resize', this.isMobileCheck);
    }
}
</script>

<style>
</style>