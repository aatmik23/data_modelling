import mangoose from "mangoose"

const orderitemSchema= new mangoose.Schema({
    productid:{
        type:mangoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        require:true
    }
})

const orderSchema = new mangoose.Schema({
    orderprice:{
        type:Number,
        require:true
    },
    customer:{
        type:mangoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderitem:{
        type:[orderitemSchema]

    },
    address:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    }

},{timestamps:true})

export const Order = mangoose.model("Order",orderSchema)