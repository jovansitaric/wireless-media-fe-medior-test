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
import WhatWeDo from './components/WhatWeDo';
import WhoWeAre from './components/WhoWeAre';
import HomeFooter from './components/HomeFooter';

export default {
  name: 'App',
  components: {
    NavBar,
    HomeSlider,
    WhoWeAre,
    WhatWeDo,
    HomeFooter
  }
}
</script>

<style lang="scss">
/* Silence is golden */
</style>
