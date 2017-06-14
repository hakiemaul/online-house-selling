<template lang="html">
  <div id="view-thumb">
    <!-- https://tiket3.kereta-api.co.id/?_it8tnz=TXc9PQ==&_8dnts=YzJOb1pXUjFiR1U9 -->
    <h4>Daftar Rumah</h4>
    <div class="container">
      <div class="row">
        <div class="card-group">
          <div class="card" style="width: 20rem;" v-for="house in houses">
            <div class="image-wrapper">
              <img class="card-img-top" :src="house.pictures[0]" alt="Card image cap">
            </div>
            <div class="card-block content">
              <h4 class="card-title">{{ house.title }}</h4>
              <p class="card-text">Specifications</p>
              <p class="card-text"><small>Kamar: {{ house.specifications.bedrooms}}</small></p>
              <p class="card-text"><small>Kamar Mandi: {{ house.specifications.bathrooms}}</small></p>
              <p class="card-text"><small>Area: {{ house.specifications.area}}</small></p>
              <p class="card-text card-margin">Harga: Rp {{ house.price }}</p>
              <a class="btn btn-info btn-sm card-margin">Detail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'view-thumb',
  computed: {
    houses () {
      return this.$store.getters.houses
    }
  }
}
</script>

<style lang="css" scoped>
.image-wrapper {
  overflow: hidden;
  max-height: 200px;
}

.image-wrapper > img {
  max-width: 100%;
}

.card {
  margin: 20px;
  border: 1px solid rgba(0, 0, 0, 0.125) !important;
}

.content > h4 {
  height: 2em;
  overflow: hidden;
}

.content > p {
  margin: 0;
}

.card-margin.card-text,
.card-margin {
  margin-top: 20px;
}

a {
  cursor: pointer;
}
</style>
