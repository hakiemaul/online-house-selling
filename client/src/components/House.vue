<template lang="html">
  <div class="container">
    <div class="row">
      <h1>{{ house.title }}</h1>
      <b-carousel v-model:slides.length="house.pictures.length" controls indicators :interval="3000">
       <!-- Slides with image -->
        <b-carousel-slide background="grey" height="300px" v-for="picture in house.pictures"
                          :img="picture">
        </b-carousel-slide>

    </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('getHouse', this.$route.query.id)
  },
  computed: {
    house () {
      return this.$store.getters.house
    }
  }
}
</script>

<style lang="css">
</style>
