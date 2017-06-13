<template lang="html">
  <div class="container">
    <div class="row">
      <h1>Jualan.com</h1>
    </div>
    <div class="row">
      <b-dropdown text="Pilihan tampilan.." variant="primary"  class="m-md-2">
        <b-dropdown-header>Tampilkan pilihan rumah dengan:</b-dropdown-header>
        <b-dropdown-item @click="toThumbnail">Thumbnail</b-dropdown-item>
        <b-dropdown-item @click="toList">List</b-dropdown-item>
      </b-dropdown>
    </div>
    <div class="row" style="margin-top: 50px">
      <div class="col-md-12">
        <Thumbnail v-if="display === 'thumbnail'"></Thumbnail>
        <List v-else></List>
      </div>
    </div>
  </div>
</template>

<script>
import List from '@/components/List'
import Thumbnail from '@/components/Thumbnail'
export default {
  components: {
    List,
    Thumbnail
  },
  data () {
    return {
      display: 'list'
    }
  },
  methods: {
    toThumbnail: function () {
      this.display = 'thumbnail'
    },
    toList: function () {
      this.display = 'list'
    }
  }
}
</script>

<style lang="css">
</style>
