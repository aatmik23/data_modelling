import mangoose from "mangoose"

const categorySchema = new mangoose.Schema({
    name:{
        type:String,
        require:true
    }
},{timestamps:true})

export const Category = mangoose.model("Category",categorySchema)