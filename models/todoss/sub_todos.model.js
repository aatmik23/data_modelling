import mangoose from "mangoose"

const subtodoSchema = new mangoose.Schema({},{timestamps:true})

export const Subtodo = mangoose.model("Subtodo",subtodoSchema)