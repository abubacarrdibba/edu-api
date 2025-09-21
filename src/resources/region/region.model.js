const mongoose = require("mongoose")

const regionSchema = new mongoose.Schema({
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
    cluster: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "cluster"
        }
    ]
},
{timestamps: true}
)

const regionModel = mongoose.model('region' ,regionSchema )

module.exports = regionModel;