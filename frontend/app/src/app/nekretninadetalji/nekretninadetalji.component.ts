import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agencija } from 'src/models/agencija';
import { RealEstate } from 'src/models/realestate';
import { User } from 'src/models/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-nekretninadetalji',
  templateUrl: './nekretninadetalji.component.html',
  styleUrls: ['./nekretninadetalji.component.css']
})
export class NekretninadetaljiComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) { }

  ngOnInit(): void {

   this.name=localStorage.getItem('nekretnina');
   this.servis.getRE(this.name).subscribe((data:RealEstate)=>{
     this.nekretnina=data;
     this.characteristic=data.Characteristics;
     console.log(this.nekretnina);
     if(this.nekretnina.Agencija==null){
       this.flag='vlasnik';
     }
  else{
    this.flag='agencija';
  }
  this.servis.findUser(this.nekretnina.Oglasavac).subscribe((data:User)=>{
this.oglasavac=data.firstname+' '+ data.lastname;
this.kontakt=data.phone;
this.licenca=data.numlicence;
this.agencija=data.agency;
this.servis.findAgency(this.agencija).subscribe((data:Agencija)=>{
  this.pib=data.pib;
  this.adresa=data.address;
  this.grad=data.city;
})

  })
   
 })
 this.mikro=localStorage.getItem('mikro');
     this.servis.getREMikro(this.mikro).subscribe((data:RealEstate[])=>{
       this.nekretnineNaLok=data;
       console.log(this.nekretnineNaLok);
     })
  }
  avgPrice(n){
    let kvadrati=0;
    let cena=0;
    this.nekretnineNaLok.forEach((n)=>{
      cena+=n.Price;
      kvadrati+=n.Area;
    });
    if(kvadrati==0) return 0;
    return (cena*1.0/kvadrati);
  }
cenaKvadrat(n){
  return (n.Price*1.0/n.Area)
}
flag1(n):boolean{
  if(this.avgPrice(n)>=this.cenaKvadrat(n))
 return true;
 return false;

}

flagPodaci:boolean=false;

showOglasivac(){
  this.flagPodaci=true;
}
lat:any;
lng:any;


  nekretnina:RealEstate;
  name:string;
  provera:boolean;
  cena:number;
  cena1:number;
  characteristic:string[]=[];
  flag:string;
  oglasavac:string;
  kontakt:string;
  agencija:string;
  adresa:string;
  pib:string;
  flagkontakt:boolean=false;
  
  licenca:string;
  grad:string;
 

  mikro:string;
  nekretnineNaLok:RealEstate[];

  showkontakt(){
    this.flagkontakt=true;
  }
  change(value:string){
    if(!this.characteristic.includes(value))
      this.characteristic.push(value)
    else{
      let index=this.characteristic.indexOf(value)
      this.characteristic.splice(index,1)
    }
    alert(JSON.stringify(this.characteristic))    
  }

}
