var House = require('../models/house');

var create = function(req, res) {
  let newHouse = new House({
    address: req.body.address,
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
  House.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true }, (err, house) => {
    if(err) res.send(err)
    House.findById(house._id, (err, house) => {
      res.send(house)
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