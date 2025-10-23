import mangoose from "mangoose"
const userSchema = new mangoose.Schema({
    username:{
        type: String,
        require : true,
        unique : true,
        lowercase : true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        require:true,
        
    }
},{timestamps: true})

export const User = mangoose.model("User",userSchema)