import  mongoose  from "mongoose";
const Schema=mongoose.Schema;

let Favorite=new Schema({
   
    username:{
        type:String
    },
    id:{
        type:String
    }
})
export default mongoose.model('Favorite',Favorite,'favorites');