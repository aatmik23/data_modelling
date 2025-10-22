import mangoose from "mangoose"
const userSchema = new mangoose.Schema({
    username : {
        type : String,
        require : true,
        unique : true,
        lowercase : true

    },
    email : {
         type : String,
         require : true,
         unique : true ,
         lowercase: true
    },
    password : {
        type : String,
        require :[true, "password is required"] 
        
    }
},{
    timestamps: true // add two method createdat and updatedat
}
)
export const User = mangoose.model("User",userSchema) //magoose take User and make it users

