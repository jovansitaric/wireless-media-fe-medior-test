<template>
  <NavBar />
  <HomeSlider />
  <WhoWeAre />
  <WhatWeDo />
  <HomeFooter />
</template>

<script>
import NavBar from './components/NavBar'
import HomeSlider from './components/HomeSlider'
import WhatWeDo from './components/WhatWeDo.vue';
import WhoWeAre from './components/WhoWeAre.vue';
import HomeFooter from './components/HomeFooter.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HomeSlider,
    WhoWeAre,
    WhatWeDo,
    HomeFooter
},
}
</script>

<style lang="scss">
/* Silence is golden */
</style>
