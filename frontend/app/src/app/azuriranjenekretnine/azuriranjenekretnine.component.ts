
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { RealEstate } from 'src/models/realestate';
import { User } from 'src/models/user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-azuriranjenekretnine',
  templateUrl: './azuriranjenekretnine.component.html',
  styleUrls: ['./azuriranjenekretnine.component.css']
})
export class AzuriranjenekretnineComponent implements OnInit {

  constructor(private ruter:Router, private servis:UserService) { }

  ngOnInit(): void {
    this.ulogovan=JSON.parse(localStorage.getItem('loggedInUser'));
    console.log(this.ulogovan.username)
  this.idNek=localStorage.getItem('nekretninaazuriraj')
console.log(this.idNek)
this.servis.getRE(this.idNek).subscribe((data:RealEstate)=>{
  this.nekretnina=data;
  
  /**this.grad=data.City;
  this.id=this.nekretnina.Name;
  this.opstina=this.nekretnina.Municipality;
  this.cena=this.nekretnina.Price;
  this.grejanje=this.nekretnina.Heating;
  this.mikrolokacija=this.nekretnina.Microlocation;
  this.troskovi=this.nekretnina.MonthlyUtilities;
  this.sprat=this.nekretnina.Floor;
  this.spratnost=this.nekretnina.TotalFloors;
  this.tip=this.nekretnina.Type;
  this.opis=this.nekretnina.About;
  this.grejanje=this.nekretnina.Heating;
  this.ulica=this.nekretnina.Street;
  this.stanje=this.nekretnina.State;
  this.soba=this.nekretnina.Rooms;
  this.kvadratura=this.nekretnina.Area;
  this.stanje=this.nekretnina.State;
 this.characteristic=this.nekretnina.Characteristics;
  this.godina=this.nekretnina.ConstructionYear;
  this.slike=this.nekretnina.Pictures;
  this.idnek=this.nekretnina.Id;
  this.parking=this.nekretnina.Parking;*/
  console.log(this.nekretnina);
  console.log(this.nekretnina.Name)
  //console.log(this.grad)
  this.ime=this.nekretnina.Name;
  this.tip=this.nekretnina.Type;
  this.grad=this.nekretnina.City;
  this.opstina=this.nekretnina.Municipality;
  this.mikrolokacija=this.nekretnina.Microlocation;
  this.sprat=this.nekretnina.Floor;
  this.spratnost=this.nekretnina.TotalFloors;
  this.kvadratura=this.nekretnina.Area;
  this.cena=this.nekretnina.Price;
  this.troskovi=this.nekretnina.MonthlyUtilities;
  this.soba=this.nekretnina.Rooms;
  this.ulica=this.nekretnina.Street;
  this.stanje=this.nekretnina.State;
  this.grejanje=this.nekretnina.Heating;
  this.characteristic=this.nekretnina.Characteristics;
  this.godina=this.nekretnina.ConstructionYear;
  this.opis=this.nekretnina.About;
  this.parking=this.nekretnina.Parking;
for(let i=0;i<this.nekretnina.Pictures.length;i++){
  this.slike.push(this.nekretnina.Pictures[i])
}

  console.log(this.slike)
  console.log(this.characteristic)

})



   

    }
    onFileSelected(event) {
      console.log(event.target.files);
      for(let i=0;i<event.target.files.length;i++)
      this.slike2[i]=event.target.files[i]
      //this.slike = event.target.files[0]; 
      console.log(this.slike2);
   
    }
  
  ulogovan:User;
id12:number;
  ime:string;
  tip:string;
  grad:string;
  opstina:string;
  mikrolokacija:string;
  sprat:number=null;
  spratnost:number;
  kvadratura:number;
  cena:number;
  troskovi:number;
  soba:number
  ulica:string;
  characteristic:string[]=[]
  slike=[];
  stanje:string;
  grejanje:string;
  message:string;
  idNek:string;
  re:RealEstate;
  opis:string;
  godina:number;
  idnek:number;
  parking:string;
  nekretnina:RealEstate;
  slike2:File[]=[]

  change(value:string){
    if(!this.characteristic.includes(value))
      this.characteristic.push(value)
    else{
      let index=this.characteristic.indexOf(value)
      this.characteristic.splice(index,1)
    }
    alert(JSON.stringify(this.characteristic))    
  }



   
  


update(){
  let photos=[];
      
      
  //if(this.slike2!=undefined){
    
    if(this.slike2.length<3){
      this.message='Morate uneti najmanje 3 slike';
      alert(this.message)
      return
    }
    if(this.slike2.length>6){
      this.message='Mozete uneti max 6 slika';
      alert(this.message)
      return
    }
 for(let i=0;i<this.slike2.length;i++){
  console.log(this.slike2[i].name)
  photos.push(this.slike2[i].name)

 }
   
 

// }
// else{
  if(this.slike2==null)
  for(let i=0;i<this.slike2.length;i++){
    console.log(this.slike[i].name)
    photos.push(this.slike[i].name)
  
   }
 //}
 if(photos!=null){
this.servis.updateNek(
  this.ime,
  this.tip,
  this.grad,
  this.opstina,
  this.mikrolokacija,
  this.ulica,
  this.kvadratura,
  this.soba,
  this.godina,
  this.stanje,
  this.grejanje,
  this.sprat,
  this.spratnost,
  this.parking,
  this.troskovi,
  this.cena,
  this.opis,
  this.characteristic,
  photos).subscribe((resp)=>{
    console.log('prosao')
    if(resp['message']=='ok'){
     this.ruter.navigate(['/mojenekretnine'])
    }


  })
}

  
}



}
