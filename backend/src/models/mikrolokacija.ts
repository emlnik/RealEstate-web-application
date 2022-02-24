import  mongoose  from "mongoose";
const Schema=mongoose.Schema;

let Mikrolokacija=new Schema({
  Grad:{
      type:String
  },
  Opstina:{
      type:String
  },
  Mikrolokacije:{
      type:Array
  }  
})
export default mongoose.model('Mikrolokacija',Mikrolokacija,'microlocations')