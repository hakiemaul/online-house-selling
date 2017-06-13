<template lang="html">
  <div class="container">
    <div class="row">
      <h2>Buat <em>Listing</em> Baru</h2>
    </div>
      <div class="form-group row">
        <label for="title" class="col-2 col-form-label">Nama</label>
        <div class="col-5">
          <input class="form-control" type="text" placeholder="Nama properti anda" id="title" v-model="house.title">
        </div>
      </div>
      <div class="form-group row">
        <label for="pictures" class="col-2 col-form-label">URL Gambar</label>
        <div class="col-5">
          <div v-for="(picture, index) in house.pictures">
            <input class="form-control" type="text" placeholder="URL gambar anda" v-model="house.pictures[index]">
            <img :src="picture" class="image" style="max-width: 200px"><br>
          </div>
          <!-- <div v-for="(image, index) in house.pictures">
            <span class="btn btn-default btn-file">
              <input @change="uploadImage" type="file" name="image" accept="image/*">
            </span>
          </div> -->
        </div>
        <div class="col">
          <button type="button" class="btn btn-default" @click="morePic" title="Tambah gambar properti anda"><i class="fa fa-plus" aria-hidden="true"></i></button>
          <button type="button" class="btn btn-default" @click="lessPic" title="Hapus gambar"><i class="fa fa-minus" aria-hidden="true"></i></button>
        </div>
      </div>
      <div class="form-group row">
        <label for="description" class="col-2 col-form-label">Deskripsi</label>
        <div class="col-5">
          <textarea class="form-control" id="description" rows="5" v-model="house.description"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="exampleSelect1" class="col-2 col-form-label">Kota</label>
        <div class="col-5">
          <select class="form-control" id="exampleSelect1" v-model="house.city">
            <option>Jakarta</option>
            <option>Bogor</option>
            <option>Depok</option>
            <option>Tangerang</option>
            <option>Bekasi</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="price" class="col-2 col-form-label">Harga</label>
        <div class="col-5">
          <input class="form-control" type="number" placeholder="Harga penawaran anda" v-model.number="house.price">
        </div>
      </div>
      <div class="form-group row">
        <label for="price" class="col-2 col-form-label">Spesifikasi</label>
        <div class="col-5">
          <div class="form-group row">
            <label for="price" class="col-4 col-form-label">Jumlah Kamar</label>
            <div class="col-8">
              <input class="form-control" type="number" placeholder="Cth: 2" v-model.number="house.specifications.bedrooms"><br>
            </div>
            <label for="price" class="col-4 col-form-label">Jumlah K. Mandi</label>
            <div class="col-8">
              <input class="form-control" type="number" placeholder="Cth: 2" v-model.number="house.specifications.bathrooms"><br>
            </div>
            <label for="price" class="col-4 col-form-label">Luas Rumah</label>
            <div class="col-8">
              <input class="form-control" type="text" placeholder="Cth: 70 m2" v-model="house.specifications.area"><br>
            </div>
            <label for="price" class="col-4 col-form-label">Kondisi Rumah</label>
            <div class="col-8">
              <select class="form-control" v-model="house.specifications.condition">
                <option value="1">Siap Huni</option>
                <option value="2">Belum Siap Huni</option>
              </select><br>
            </div>
            <label for="price" class="col-4 col-form-label">Jumlah Tingkat</label>
            <div class="col-8">
              <input class="form-control" type="number" placeholder="Cth: 2" v-model.number="house.specifications.floors"><br>
            </div>
            <label for="price" class="col-4 col-form-label">Sertifikat</label>
            <div class="col-8">
              <input class="form-control" type="text" placeholder="Cth: SHM" v-model="house.specifications.certificate">
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="price" class="col-2 col-form-label">Kontak</label>
        <div class="col-5">
          <input class="form-control" type="text" placeholder="Kontak yang bisa dihubungi, cth Budi - 081271782881" v-model="house.contact">
        </div>
      </div>
      <div class="form-group row">
        <label for="price" class="col-1 col-form-label">Latitude</label>
        <div class="col-1"></div>
        <div class="col-2">
          <input class="form-control" type="number" placeholder="-7.12311" v-model="house.lat" readonly>
        </div>
        <label for="price" class="col-1 col-form-label">Longitude</label>
        <div class="col-2">
          <input class="form-control" type="number" placeholder="102.12311" v-model="house.lng" readonly>
        </div>
      </div>
      <div class="form-group row">
        <label for="price" class="col-2 col-form-label">Select location</label>
        <div class="col-6">
          <gmap-map
          :center="center"
          :zoom="10"
          style="width: 100%; height: 300px"
          @click="mapClick"
          >
          <gmap-marker
          :position="markers.position"
          :clickable="true"
          :draggable="true"
          @click="center=markers.position"
          ></gmap-marker>
        </gmap-map>
        </div>
      </div>
      <button type="button" class="btn btn-primary" @click="addHouse">Tambahkan</button>
    </div>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB6SFVdqZ01CAbOTI7XLUqezadOhQwOYxM'
  }
})
export default {
  data () {
    return {
      house: {
        title: '',
        pictures: [''],
        description: '',
        city: '',
        price: 0,
        specifications: {
          bedrooms: 0,
          bathrooms: 0,
          area: '',
          condition: '',
          floors: 0,
          certificate: ''
        },
        contact: '',
        lat: '',
        lng: ''
      },
      imageSrc: '',
      center: {lat: -6.175110, lng: 106.865039},
      markers: {
        position: {lat: -6.175110, lng: 106.865039}
      }
    }
  },
  methods: {
    morePic () {
      this.house.pictures.push('')
    },
    lessPic () {
      if (this.house.pictures.length > 1) {
        this.house.pictures.splice((this.house.pictures.length - 1), 1)
      }
    },
    mapClick (e) {
      this.markers.position.lat = e.latLng.lat()
      this.markers.position.lng = e.latLng.lng()
      this.house.lat = e.latLng.lat()
      this.house.lng = e.latLng.lng()
    },
    addHouse () {
      if (this.house.specifications.condition === '1') {
        this.house.specifications.condition = true
      } else {
        this.house.specifications.condition = false
      }
      this.$store.dispatch('addHouse', this.house)
    }
  }
}
</script>

<style lang="css">
</style>
