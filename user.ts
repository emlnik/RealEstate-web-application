import  mongoose  from "mongoose";
const Schema=mongoose.Schema;

let User=new Schema({
   
    username:{
        type:String
    },
    password:{
        type:String
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    city:{
        type:String
    },
    bday:{
        type:String
    },
    email:{
        type:String
    },
    agency:{
        type:String
    },
    numlicence:{
        type:String
    },
    picture:{
        type:String
    },
    phone:{
        type:String
    },
    type:{
        type:String
    },
    valid:{
        type:Boolean
    },
    favorites:{
        type:Array
    }
})
export default mongoose.model('User',User,'users');