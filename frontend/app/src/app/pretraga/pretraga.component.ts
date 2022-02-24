import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RealEstate } from 'src/models/realestate';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.css']
})
export class PretragaComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem('realestates')!=null){
      let u=localStorage.getItem('realestates');
      console.log(u);
      localStorage.removeItem(u);
      console.log(localStorage.getItem('realestates'))
    }
    this.servis.getNekretnine().subscribe((data:RealEstate[])=>{
      this.realestates=data;
      console.log(this.realestates);
    })
  }

  cenaDo:number;
  kvadraturaOd:number;
  tip:string;
  mikrolokacija:string;
  minBrSoba:number;
message:string;
messageTip:string;
grad:string;
opstina:string;
realestates:RealEstate[];

checkRequired():boolean{
  if(this.tip==null){
return false;
  }
  return true;
}

pretraga(){
 if(this.checkRequired()==false){
 this.message='Polje tip je obavezno';
   
   return;
 }

 if(this.tip==null && this.cenaDo==null && this.kvadraturaOd==null && this.mikrolokacija==null && this.minBrSoba==null && this.mikrolokacija==null){
   this.message='Morate uneti bar jedno polje za pretragu';
   return;
 }
  

  this.servis.search(this.tip).subscribe((data:RealEstate[])=>{  //osnovna pretraga jer je ovo obavezno polje
    this.realestates=data;
    if (this.cenaDo){
      this.realestates=this.realestates.filter(re=>re.Price<this.cenaDo);
    }
    if(this.kvadraturaOd){
      this.realestates=this.realestates.filter(re=>re.Area>=this.kvadraturaOd);
    }
    if(this.minBrSoba){
      this.realestates=this.realestates.filter(re=>re.Rooms>=this.minBrSoba);
    }
    if(this.mikrolokacija){
     this.realestates=this.realestates.filter(re=>re.Microlocation==this.mikrolokacija);
      
    

    }
    if(this.grad){
      this.realestates=this.realestates.filter(re=>re.City==this.grad);
    }
    if(this.opstina){
      this.realestates=this.realestates.filter(re=>re.Municipality==this.opstina);
    }
 
    localStorage.setItem('realestates',JSON.stringify(this.realestates));
    this.ruter.navigate(['/prikazpretrage'])
  })


}

}
