import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorite } from 'src/models/favorites';
import { RealEstate } from 'src/models/realestate';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-omiljene',
  templateUrl: './omiljene.component.html',
  styleUrls: ['./omiljene.component.css']
})
export class OmiljeneComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) { }

  ngOnInit(): void {
    this.rez=[];
    this.user=JSON.parse(localStorage.getItem('loggedInUser'));
    console.log(this.user.username)
   this.servis.getUserFav(this.user.username).subscribe((data:Favorite[])=>{
this.favUser=data;
console.log(this.favUser);
   })
this.favUser.forEach((f)=>{
  console.log(f.id)
  this.servis.getRE(f.id).subscribe((data:RealEstate)=>{
   
  this.rez.push(data);
    
   // this.rez.push(this.data1);
   
   console.log(data)
  })
})
console.log(this.rez)
 this.servis.getNekretnine().subscribe((data:RealEstate[])=>{
  this.allNekretnine=data;
  console.log(this.allNekretnine);
})

  }
 userpom:number[]
 data1:RealEstate;
  allNekretnine:RealEstate[]=[];
  favUser:Favorite[]=[];
  rez:RealEstate[]=[];
  avgPrice(n){
    let nekretnineMikroTip=this.allNekretnine.filter((nek)=>{
      return (nek.Microlocation==n.Microlocation && nek.Type==n.Type)
    });
      let kvadrati=0;
      let cena=0;
     nekretnineMikroTip.forEach((n)=>{
        cena+=n.Price;
        kvadrati+=n.Area;
      });
      if(kvadrati==0) return 0;
      return (cena*1.0/kvadrati);
    }

    ukloni(id){
      this.servis.ukloni(id,this.user.username).subscribe((resp)=>{
        if(resp['message']=='ok'){
          this.servis.getUserFav(this.user.username).subscribe((data:Favorite[])=>{
            this.favUser=data;
            console.log(this.favUser);
          })
        }
      })
    }

  user:User
 

}
