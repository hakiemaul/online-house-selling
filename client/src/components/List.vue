<template lang="html">
  <div id="view-list">
    <h4>Daftar Rumah</h4>
    <div v-for="house in houses">
      <div class="row each">
        <div class="col-3">
          <img :src="house.pictures[0]" alt="" class="img-fluid" style="height: 100%;">
        </div>
        <div class="col-6">
          <h5>{{ house.title }}</h5>
          <div class="row">
            <div class="col-3 content">
              Spesifikasi
            </div>
            <div class="col-6 spec content">
              <p>Kamar: {{house.specifications.bedrooms}}</p>
              <p>Kamar Mandi: {{house.specifications.bathrooms}}</p>
              <p>Luas: {{house.specifications.area}}</p>
            </div>
          </div>
          <p><small><i class="fa fa-map-marker" aria-hidden="true"></i> {{house.city}}</small></p>
          <button type="button" class="btn btn-default btn-sm"><router-link :to="{ path: 'house', query: { id: house._id }}">Detail</router-link></button>
          <button type="button" class="btn btn-default btn-sm">Bandingkan</button>
        </div>
        <div class="col-3">
          <h5>Rp {{ house.price }}</h5>
        </div>
      </div>
    </div>
    <h5 v-if="houses.length === 0">Belum ada data :( </h5>
  </div>
</template>

<script>
export default {
  name: 'view-list',
  computed: {
    houses () {
      return this.$store.getters.houses
    }
  },
  created () {
    this.houses.forEach(house => {
      house.price = house.price.toLocaleString()
      console.log(house.price)
    })
  }
}
</script>

<style lang="css" scoped>
.spec {
  padding: 5px;
  line-height: 0.8em;
  font-size: 14px;
}

.content {
  margin-top: 10px;
}

.each {
  margin: 10px;
  padding: 40px;
  border: 1px solid #d8d8d8;
  border-radius: 20px;
  max-height: 300px;
}
</style>
