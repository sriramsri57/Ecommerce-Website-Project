const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
        maxlength: [100, "Product name cannot exceed 100 characters"]
    },
    price : {
        type: Number,
        required: true,
        default: 0.0,
    },
    description: {
        type : String,
        required: [true, "Please enter product discription"]
    },
    ratings: {
        type: String,
        default: 0
    },
    images: [
        {
            image: {
                type: String,
                required: true
            }
        }
    ],
    size: {
        type: String,
        required: [true, "Please enter product size"],
        enum: {
            values:[
                'XS',
                'S',
                'M',
                'L',
                'XL',
                'XXL'
            ],
            message : "Please select correct size"
        }
    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock"]
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'User'
            },
            rating: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user:{
        type: mongoose.Schema.Types.ObjectId
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
        
    })

let schema = mongoose.model('Product', productSchema)

module.exports = schema