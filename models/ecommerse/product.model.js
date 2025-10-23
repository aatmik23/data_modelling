import mangoose from "mangoose"
const productSchema = new mangoose.Schema({
    name:{
        type:String,
        require:true
    },
    descriptionn:{
        type:String,
        requie:true
    },
    productimg:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    catrgory:{
        type:mangoose.Schema.Types.ObjectId,
        ref:"Category",
        require:true
    },
    owner:{
        type:mangoose.Schema.Types.ObjectId,
        ref:"User"
        
    }
},{timestamps:true})
export const Product = mangoose.model("Product",productSchema)