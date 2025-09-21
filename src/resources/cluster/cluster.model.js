const mongoose = require("mongoose")

const clusterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },  
    code: {
        type: Number,
        unique: true, 
        trim: true,
    },
   region: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "region"
    }
},
{timestamps: true}
)

const clusterModel = mongoose.model("cluster" ,clusterSchema );

module.exports = clusterModel;