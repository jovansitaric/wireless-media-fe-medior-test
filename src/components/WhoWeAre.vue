<template>
  <section class="m-section -whoWeAre">
    <div class="_wr">
      <div class="_w">
        <h2 class="a-heading -two">
          {{ whoWeAre.title }}
        </h2>
        <div class="m-card -innerWrap" v-for="card in whoWeAre.articles" :key="card.id">
          <div class="m-card__image _m6">
            <img class="m-card__image--image" :src="card.thumbnailUrl" :alt="card.title">
          </div>
          <div class="m-card__content _m6">
            <h3 class="a-heading -three">{{ card.title }}</h3>
            <p class="m-card__content--text">{{ card.excerpt }}</p>
            <a href="#" class="a-button -main -asr" @click="preventDefault">Show more</a>
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
      .get('http://localhost:8080/b/I02R')
      .then(response => this.whoWeAre = response.data)
  },

  data () {

    return {
      whoWeAre: []
    }
  },

  methods: {

    preventDefault(e) {
      if (e) { e.preventDefault() }
    }
  }
}

</script>

<style>

</style>