const mongoose = require("mongoose")
const mongoose = require("mongoose")
require("dotenv").config()
const connection = mongoose.connect(process.env.mongo_atlas_url);


module.exports ={connection}

