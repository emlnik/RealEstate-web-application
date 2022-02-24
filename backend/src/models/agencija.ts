
import  mongoose  from "mongoose";
const Schema=mongoose.Schema;

let Agencija= new Schema({
    name:{
        type:String
    },
    pib:{
        type:String
    },
    city:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    }
})
export default mongoose.model('Agencija',Agencija,'agencies')