import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agencija } from 'src/models/agencija';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) { }

  ngOnInit(): void {
    this.ulogovan=JSON.parse(localStorage.getItem('loggedInUser'))

this.servis.getUsersOnHold().subscribe((data:[])=>{
  this.zahtevi=data;
  console.log(this.zahtevi)

})

this.servis.getAgencije().subscribe((data:Agencija[])=>{
  this.agencije=data;
  console.log(this.agencije);
})
this.servis.getSviKorisnici().subscribe((data:User[])=>{
  this.sviKorisnici=data;
  console.log(this.sviKorisnici)
})
    
  }

  ulogovan:User;
  zahtevi:User[];
  choosenUserType: string = null;
  choosenUser: User = null;
  messageApproveUser:string;
  choosenOption:number;
  



  logout(){
    let u=JSON.parse(localStorage.getItem('loggedInUser'));
    localStorage.removeItem(u);
    this.ruter.navigate(['/']);
  }
prihvati(user){
  this.messageApproveUser=null;

  this.servis.prihvati(user).subscribe((resp)=>{
    if(resp['message']=='ok'){
      console.log('prosao')
      this.servis.getUsersOnHold().subscribe((data:User[])=>{
        this.zahtevi=data;
        console.log(this.zahtevi)
      })
    }
  })
}
odbij(user){
  console.log(user);
  this.servis.odbij(user).subscribe((resp)=>{
    if(resp['message']=='ok'){
      console.log('prosao')
      this.servis.getUsersOnHold().subscribe((data:User[])=>{
        this.zahtevi=data;
        console.log(this.zahtevi)
      })
    }
  })
}
obrisi(user){
  console.log(user);
  this.servis.obrisi(user).subscribe((resp)=>{
    if(resp['message']=='ok'){
      this.servis.getSviKorisnici().subscribe((data:User[])=>{
        this.sviKorisnici=data;
        console.log(this.sviKorisnici)
      })
    }
  })
}
azuriraj(user){
  localStorage.setItem('username',user);
  this.ruter.navigate(['/azuriranje']);

}



telefon:string;
ime:string;
prezime:string;
lozinka1:string;
grad:string;
username:string;
password:string;
email:string;
agencija:Agencija;
agencije:Agencija[]
message:string;
slika:string;
korisnici:User[];
licenca:string='';
tip:string;
tipovi:string[]=['kupac','oglasavac'];
datumRodjenja:string;
avatar:any;
messageKor:string;
messageEmail:string;
messageLoz:string;
sviKorisnici:User[];



messageCaptcha:string;




onFileSelected(event){
  console.log(event.target.files);
  this.avatar=event.target.files[0];
  console.log(this.avatar);

 //   alert(this.imageFile)
  }
 /** if(event.target.files && event.target.files[0]){
    var reader=new FileReader()
    const img=new Image()
    const fup=(event.target.files)
    img.src=URL.createObjectURL(fup[0])
    img.onload=(e:any)=>{
        let h=e.path[0].height
        let w=e.path[0].width
        if(h<100 || w<100 || h>300 || w>300){
          this.message="Nisu dobre dimenzije slike";   
          return;
        }
    }
    reader.onload=(event:any)=>{
      var image=new Image()
      image.onload=()=>{
        alert(img.width)
        alert(img.height)
      };
      this.slika=event.target.result;
    }
    reader.readAsDataURL(event.target.files[0])
   alert(this.slika)
  }*/

promeni(id:string):void{
  if(id==""){

this.agencija.name=null;

  }
  else{
    this.agencija=this.agencije.filter(value=> value.name==id)[0];
  }
}
onVerify(token:string){
  this.messageCaptcha='Provera je u redu';
}
onExpired(response:any){
  this.messageCaptcha='Verifikacija je istekla'
}
onError(error:any){
  this.messageCaptcha='Greska prilikom verifikacije'
}
flagUser():boolean{
  let u:User=this.korisnici.filter(value=>value.username==this.username)[0]
  if(u)
    return true;
  return false;
}
flagEmail():boolean{
  let u:User=this.korisnici.filter(value=> value.email==this.email)[0]
  if(u)
    return true;
  return false;
}

register(){

  let avatar;
if(this.avatar!=undefined){
avatar=this.avatar.name;
}
else{
avatar='avatar.png'
}
 
  if(this.ime == undefined || this.prezime == undefined || this.username == undefined ||
    this.password == undefined || this.lozinka1 == undefined || this.email == undefined ||
    this.grad == undefined ||  this.tip == undefined || this.datumRodjenja==undefined, this.avatar==undefined){
      this.message = "Popunite sva polja";
      return;
    }
  if(this.password!=this.lozinka1){
    this.message='Lozinke se ne podudaraju. Pokusajte ponovo.'
    return;
  }
  var regularExpression =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!regularExpression.test(this.email)) {
    this.message = "Email adresa nije validna";
    return;
  }


  var regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,24}$/;
  if(!regularExpression.test(this.password)) {
    this.messageLoz = "Lozinka nije u dobrom formatu.";
    return;
  }


/** this.servis.getSviKorisnici().subscribe((data:User[])=>{
let flag=0;
data.forEach((u)=>{
if(u.email==this.email){
  this.message='Postoji korisnik sa ovom email adresom.'
  flag=1;
  return;
}

})
if(flag==1){
return;
}
})
this.servis.getSviKorisnici().subscribe((data:User[])=>{
let flag=0;
data.forEach((u)=>{
  if(u.username==this.username){
    this.message='Korisnicko ime je vec u upotrebi.'
    flag=1;
  return;
  }

})
if(flag==1){
  return;
}

})*/
if(this.flagUser()){
this.message="Korisnicko ime je zauzeto"
return;
}
if(this.flagEmail()){
this.messageEmail="Email adresa je zauzeta"
return;
}
if(this.tip=='kupac'){
this.servis.register1(this.username,this.password,this.ime,this.prezime,this.grad,this.datumRodjenja,this.email,avatar,
  this.telefon,this.tip).subscribe((resp)=>{
    if(resp['message']=='ok'){
     alert('User added')
      this.ruter.navigate(['/']);
    }
  
  })
}

this.servis.register(this.username,this.password,this.ime,this.prezime,this.grad,this.datumRodjenja,this.email,this.agencija.name,this.licenca,avatar,
this.telefon,this.tip).subscribe((resp)=>{
  if(resp['message']=='ok'){
    alert('User added')
    this.ruter.navigate(['login'])
  }
  else{
    this.message='Neuspesna registracija';
  }
})

}

}
