var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp)

var should = chai.should();

var server = require('../app')
var House = require('../models/house')

describe('House API test', () => {
  afterEach(done => {
    House.remove({}, (err, res) => {
      done()
    })
  })

  describe('GET /api/houses', () => {
    it('should get all house', function(done) {
      chai.request(server)
      .get('/api/houses')
      .end(function(err, res) {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.should.have.lengthOf(0)
        done()
      })
    })
  })

  describe('POST /api/houses', () => {
    afterEach(done => {
      House.remove({}, (err, res) => {
        done()
      })
    })

    it('should create new house', function(done) {
      chai.request(server)
      .post('/api/houses')
      .send({
        address: "Jl. Lumbu Tengah Raya No. 30, Perumahan Bumi Bekasi Baru",
        price: 100000000,
        specifications: ["2 lantai", "Bebas banjir"],
        lat: "-6.287905",
        lng: "106.994220",
        createdAt: new Date(),
        contact: "082139192891 - Aulia"
      })
      .end(function(err, res) {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('address')
        res.body.should.have.property('price')
        res.body.should.have.property('specifications')
        res.body.should.have.property('lat')
        res.body.should.have.property('lng')
        res.body.should.have.property('createdAt')
        done()
      })
    })

    it('should return error if address is empty', function(done) {
      chai.request(server)
      .post('/api/houses')
      .send({
        price: 100000000,
        specifications: ["2 lantai", "Bebas banjir"],
        lat: "-6.287905",
        lng: "106.994220",
        createdAt: new Date(),
        contact: "082139192891 - Aulia"
      })
      .end(function(err, res) {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('errors')
        done()
      })
    })

    it('should return error if price is empty', function(done) {
      chai.request(server)
      .post('/api/houses')
      .send({
        address: "Jl. Lumbu Tengah Raya No. 30, Perumahan Bumi Bekasi Baru",
        specifications: ["2 lantai", "Bebas banjir"],
        lat: "-6.287905",
        lng: "106.994220",
        createdAt: new Date(),
        contact: "082139192891 - Aulia"
      })
      .end(function(err, res) {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('errors')
        done()
      })
    })

    it('should return error if lat is empty', function(done) {
      chai.request(server)
      .post('/api/houses')
      .send({
        address: "Jl. Lumbu Tengah Raya No. 30, Perumahan Bumi Bekasi Baru",
        price: 100000000,
        specifications: ["2 lantai", "Bebas banjir"],
        lng: "106.994220",
        createdAt: new Date(),
        contact: "082139192891 - Aulia"
      })
      .end(function(err, res) {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('errors')
        done()
      })
    })

    it('should return error if lng is empty', function(done) {
      chai.request(server)
      .post('/api/houses')
      .send({
        address: "Jl. Lumbu Tengah Raya No. 30, Perumahan Bumi Bekasi Baru",
        price: 100000000,
        specifications: ["2 lantai", "Bebas banjir"],
        lat: "-6.287905",
        createdAt: new Date(),
        contact: "082139192891 - Aulia"
      })
      .end(function(err, res) {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('errors')
        done()
      })
    })

    it('should return error if contact is empty', function(done) {
      chai.request(server)
      .post('/api/houses')
      .send({
        address: "Jl. Lumbu Tengah Raya No. 30, Perumahan Bumi Bekasi Baru",
        price: 100000000,
        specifications: ["2 lantai", "Bebas banjir"],
        lat: "-6.287905",
        lng: "106.994220",
        createdAt: new Date()
      })
      .end(function(err, res) {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('errors')
        done()
      })
    })
  })

  describe('PUT /api/houses/:id', () => {
    var target;
    beforeEach(done => {
      var newHouse = new House({
        address: "Jl. Lumbu Tengah Raya No. 30, Perumahan Bumi Bekasi Baru",
        price: 100000000,
        specifications: ["2 lantai", "Bebas banjir"],
        lat: "-6.287905",
        lng: "106.994220",
        createdAt: new Date(),
        contact: "082139192891 - Aulia"
      })
      newHouse.save((err, saved) => {
        if(err) {
          console.log(err)
        } else {
          target = saved._id;
          done()
        }
      })
    })
    it('should edit new house', function(done) {
      chai.request(server)
      .put(`/api/houses/${target}`)
      .send({
        address: "Tes",
        price: 100,
        specifications: ["2 lantai", "Bebas banjir"],
        lat: "-6.287905",
        lng: "106.994220",
        createdAt: new Date(),
        contact: "082139192891 - Aulia"
      })
      .end(function(err, res) {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('address', "Tes")
        res.body.should.have.property('price', 100)
        done()
      })
    })
  })

  describe('DELETE /api/houses/:id', () => {
    var target;
    beforeEach(done => {
      var newHouse = new House({
        address: "Jl. Lumbu Tengah Raya No. 30, Perumahan Bumi Bekasi Baru",
        price: 100000000,
        specifications: ["2 lantai", "Bebas banjir"],
        lat: "-6.287905",
        lng: "106.994220",
        createdAt: new Date(),
        contact: "082139192891 - Aulia"
      })
      newHouse.save((err, saved) => {
        if(err) {
          console.log(err)
        } else {
          target = saved._id;
          done()
        }
      })
    })
    it('should delete the created house', function(done) {
      chai.request(server)
      .delete(`/api/houses/${target}`)
      .end(function(err, res) {
        res.should.have.status(200)
        res.body.should.be.a('object')
        done()
      })
    })
  })
})