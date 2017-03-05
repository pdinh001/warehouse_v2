var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    sku: String,
    qty: Number,
    location: String
});

var imageSchema = new mongoose.Schema({
    sku: String,
    image_url: String
});

// var weightSchema = new mongoose.Schema({
//     sku: String,
//     weight: Number
// });

mongoose.model('sku_images', imageSchema);
mongoose.model('sku_locations', locationSchema);