import mangoose from "mangoose"

const todoSchema = new mangoose.Schema({
    content : {
        type : String,
        require : true
    },
    compelete : {
        type : Boolean,
        default : false
    },
    createdby : {
        type : mangoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    subtodo:[
        {type: mangoose.Schema.Types.ObjectId,
            ref : "Subtodo"
        }
    ]

},{timestamps:true})

export const Todo = mangoose.model("Todo",todoSchema)