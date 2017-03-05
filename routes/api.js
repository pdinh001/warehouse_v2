var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Locations = mongoose.model('sku_locations');
var Images = mongoose.model('sku_images');


router.route('/sku_locations')
    .get(function (req, res) {
        Locations.find(function (err, locations) {
            if (err) {
                return res.send(500, err);
            } else {
                return res.send(200, locations);
            }
        })
    });

router.route('/sku_images')
    .get(function (req, res) {
        Images.find(function (err, images) {
            if (err) {
                return res.send(500, err);
            } else {
                return res.send(200, images);
            }
        })
    })

module.exports = router;