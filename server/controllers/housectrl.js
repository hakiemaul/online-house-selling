var House = require('../models/house');

var create = function(req, res) {
  let newHouse = new House({
    title: req.body.title,
    pictures: req.body.pictures,
    description: req.body.description,
    city: req.body.city,
    price: req.body.price,
    specifications: req.body.specifications,
    contact: req.body.contact,
    lat: req.body.lat,
    lng: req.body.lng,
    createdAt: new Date()
  })
  newHouse.save((err, createdHouse) => {
    res.send(err ? err : createdHouse);
  })
}

var get = function(req, res) {
  House.find(function (err, houses) {
    res.send(err ? err : houses)
  });
}

var getOne = function(req, res) {
  House.find({_id: req.params.id}, (err, house) => {
    res.send(err ? err: house)
  })
}

var update = function(req, res) {
  House.find({_id: req.params.id}, (err, house) => {
    house.title = req.body.title || house.title,
    house.pictures = req.body.pictures || house.pictures,
    house.description = req.body.description || house.description,
    house.city = req.body.city || house.city,
    house.price = req.body.price || house.price,
    house.specifications.bedrooms = req.body.specifications.bedrooms || house.specifications.bedrooms,
    house.specifications.bathrooms = req.body.specifications.bathrooms || house.specifications.bathrooms,
    house.specifications.area = req.body.specifications.area || house.specifications.bedrooms,
    house.specifications.condition = req.body.specifications.condition || house.specifications.condition,
    house.specifications.floors = req.body.specifications.floors || house.specifications.floors,
    house.specifications.certificate = req.body.specifications.certificate || house.specifications.certificate,
    house.contact = req.body.contact || house.address,
    house.lat = req.body.lat || house.lat,
    house.lng = req.body.lng || house.lng

    house.save((err, editedHouse) => {
      res.send(err ? err : editedHouse);
    })
  })
}

var remove = function(req, res) {
  House.findOneAndRemove({_id: req.params.id}, (err, house) => {
    if(err) res.send(err)
    res.send(house)
  })
}

module.exports = {
  create, get, getOne, update, remove
};