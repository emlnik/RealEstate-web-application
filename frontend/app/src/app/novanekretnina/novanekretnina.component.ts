import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RealEstate } from 'src/models/realestate';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-novanekretnina',
  templateUrl: './novanekretnina.component.html',
  styleUrls: ['./novanekretnina.component.css']
})
export class NovanekretninaComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) { }

  ngOnInit(): void {
    this.ulogovan=JSON.parse(localStorage.getItem('loggedInUser'));
    this.username=this.ulogovan.username;
    this.oglasavac=this.username;
    this.agencija=this.ulogovan.agency;
    this.servis.getAgencije().subscribe((data:RealEstate[])=>{
      this.realestates=data;
      console.log(this.realestates);
    })
    this.maxId();
    console.log(this.agencija);
  }


  ulogovan:User;
  username:string;

  tip:string;
  naziv:string;
  grad:string;
  opstina:string;
  mikrolokacija:string;
  ulica:string;
  kvadratura:number;
  soba:number;
  godina:number;
  stanje:string;
  grejanje:string;
  sprat:number;
  spratnost:number;
  parking:string;
  troskovi:number;
  cena:number;
  opis:string;
  characteristic:string[]=[];
  sold:boolean=false;
  oglasavac:string;
  agencija:string;
  slike:File[]=[];
  id:number;
  message:string;
  realestates:RealEstate[];
  estate:RealEstate;
  change(value:string){
    if(!this.characteristic.includes(value))
      this.characteristic.push(value)
    else{
      let index=this.characteristic.indexOf(value)
      this.characteristic.splice(index,1)
    }
    alert(JSON.stringify(this.characteristic))    
  }

  onFileSelected(event) {
    console.log(event.target.files);
    for(let i=0;i<event.target.files.length;i++)
    this.slike[i]=event.target.files[i]
    //this.slike = event.target.files[0]; 
    console.log(this.slike);
 
  }
  maxId():void{
    let max=0;
    this.realestates.forEach((a)=>{
      if(a.Id>max)
        max=a.Id;
    })
    this.id=max;
  }
  addAgency(){
    if(this.slike==null ||  this.naziv==null || this.tip==null || this.grad==null ||this.opstina==null ||this.ulica==null ||this.mikrolokacija==null ||
      this.kvadratura==null ||this.soba==null ||this.godina==null ||this.stanje==null ||this.grejanje==null ||this.sprat==null ||this.spratnost==null ||
      this.parking==null ||this.troskovi==null ||this.cena==null ||
      this.opis==null || this.characteristic==null){
this.message='Morate popuniti sva polja';
alert(this.message);
return
      }
 
      let photos=[];
      
      
      if(this.slike!=undefined){
        
        if(this.slike.length<3){
          this.message='Morate uneti najmanje 3 slike';
          alert(this.message)
          return
        }
        if(this.slike.length>6){
          this.message='Mozete uneti max 6 slika';
          alert(this.message)
          return
        }
     for(let i=0;i<this.slike.length;i++){
      console.log(this.slike[i].name)
      photos.push(this.slike[i].name)

     }
       
     
  
     }
    

       
      
      console.log(photos);

      this.servis.addAgency(photos,this.naziv ,this.tip, this.grad,this.opstina,this.ulica,this.mikrolokacija,
        this.kvadratura,this.soba,this.godina,this.stanje,this.grejanje,this.sprat,this.spratnost,
        this.parking,this.oglasavac,this.agencija,this.troskovi,this.cena,
        this.opis,this.characteristic,this.sold).subscribe((resp)=>{
if(resp['message']=='ok'){
  var existingEntries = JSON.parse(localStorage.getItem("realestates"));
  console.log(existingEntries);
  this.servis.getREId(this.id).subscribe((data:RealEstate)=>{
this.estate=data;
console.log(this.estate)
console.log(this.id)
  })

  localStorage.setItem('nova',JSON.stringify(this.estate));
  existingEntries.push(this.estate);
  localStorage.setItem('realestates',JSON.stringify(existingEntries));

  this.message='uspesno dodato';
  alert(this.message);

}
else{
  this.message='neuspelo';
  alert(this.message)
}
        })
    

  }

}
