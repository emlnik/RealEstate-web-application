
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorite } from 'src/models/favorites';
import { RealEstate } from 'src/models/realestate';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-prikazpretrage',
  templateUrl: './prikazpretrage.component.html',
  styleUrls: ['./prikazpretrage.component.css']
})
export class PrikazpretrageComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) { }

  ngOnInit(): void {
    this.rezultati=JSON.parse(localStorage.getItem('realestates'));
    console.log(this.rezultati)
   this.servis.getNekretnine().subscribe((data:RealEstate[])=>{
     this.allNekretnine=data;
     console.log(this.allNekretnine);
   })

this.user=JSON.parse(localStorage.getItem('loggedInUser'));
console.log(this.user.username);
this.servis.getUserFav(this.user.username).subscribe((data:Favorite[])=>{
  this.favs=data;
  console.log(this.favs.length)
      })


    
  }

  rezultati:RealEstate[];

  page1=1;
detalji(id,mikro){
  localStorage.setItem('nekretnina',id);
  localStorage.setItem('mikro',mikro);
  this.ruter.navigate(['/nekretninadetalji']);

}
user:User;

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
id:RealEstate;
idNek:number;
favs:Favorite[]=[]
flag:boolean=false;
addFav(c){

console.log(c);

    console.log(this.user.username)
    this.servis.getUserFav(this.user.username).subscribe((data:Favorite[])=>{
      this.favs=data;
      console.log(this.favs.length)
          })
    

   /**  this.favs.forEach((f)=>{
      if(f.id==c){
     this.flag=true;
     return;
      }
    })*/
    if(this.favs.length<5){
   
    
      this.servis.dodajFav(c,this.user.username).subscribe((resp)=>{
        if(resp['message']=='ok')
        alert('uspesno dodato'+ c);
        this.servis.getUserFav(this.user.username).subscribe((data:Favorite[])=>{
          this.favs=data;
          console.log(this.favs)
          console.log(this.favs.length)
              })
      
            
        })
      }
      else{
        alert('Mozete imati samo 5 omiljenih')
        return
      }
    
    
   
     /** alert('desila se greska: nekretnina je vec oznacena kao omiljena ili imate 5 omiljenih')
      return;*/


}

allNekretnine:RealEstate[]
message:string;
    
}
