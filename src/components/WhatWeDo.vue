<template>
    <section class="m-section -whatWeDo">
    <div class="_wr">
      <div class="_w">
        <h2 class="a-heading -two">
          {{ whatWeDo.title }}
        </h2>
        <div class="-innerWrap">
          <div class="m-card _m6" v-for="card in whatWeDo.items" :key="card.id">
            <div class="m-card__content">
              <span class="a-icon -whatWeDo" :class="`icon-${card.icon}`" :src="card.thumbnailUrl" :alt="card.title"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import axios from 'axios';

export default {

  mounted () {
    axios
      .get('http://localhost:8080/b/H6I7')
      .then(response => this.whatWeDo = response.data)
  },

  data () {

    return {
      whatWeDo: []
    }
  },
}
</script>

<style>

</style>