import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agencija } from 'src/models/agencija';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-oglasavacpodaci',
  templateUrl: './oglasavacpodaci.component.html',
  styleUrls: ['./oglasavacpodaci.component.css']
})
export class OglasavacpodaciComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('loggedInUser'))
    this.kor=JSON.parse(localStorage.getItem('loggedInUser'));
  
 console.log(this.kor.username);
 this.telefon=this.kor.phone;
 this.email=this.kor.email;
 this.licenca=this.kor.numlicence;
 this.agencija=this.kor.agency;
    this.servis.getAgencije().subscribe((data:Agencija[])=>{
      this.agencije=data;
      console.log(this.agencije)
    })
  }
kor:User;
  telefon:string;
  email:string;
  messagetel:string;
  agencija:string;
  agencije:Agencija[];
  dap:boolean=false;
  licenca:string=null;


changeTelefon(){
  this.servis.updateTelefon(this.kor.username,this.telefon).subscribe((resp)=>{
  if(resp['message']=='ok'){
    this.messagetel='Telefon uspesno promenjen';
    let u=localStorage.getItem('loggedInUser');
    localStorage.removeItem(u);
    console.log('odjava');
    localStorage.removeItem('')
    this.ruter.navigate(['/']);
  }
  })
}
updateAgencija(){
  if (this.agencija==""){
    this.agencija=null;
  this.servis.updateAgencija(this.kor.username,this.agencija).subscribe((resp)=>{
    if(resp['message']=='ok'){
      this.messagetel='Telefon uspesno promenjen';
      let u=localStorage.getItem('loggedInUser');
      localStorage.removeItem(u);
      console.log('odjava');
      localStorage.removeItem('')
      this.ruter.navigate(['/']);
    }
    })
  }
  else{
    this.servis.updateAgencija(this.kor.username,this.agencija).subscribe((resp)=>{
      if(resp['message']=='ok'){
        this.messagetel='Telefon uspesno promenjen';
        let u=localStorage.getItem('loggedInUser');
        localStorage.removeItem(u);
        console.log('odjava');
        localStorage.removeItem('')
        this.ruter.navigate(['/']);
      }
      })
  }
}
updateAgencija1(){
  if (this.agencija==""){
    this.agencija=null;
  this.servis.updateAgencija(this.kor.username,this.agencija).subscribe((resp)=>{
    if(resp['message']=='ok'){
      this.messagetel='Telefon uspesno promenjen';
      let u=localStorage.getItem('loggedInUser');
      localStorage.removeItem(u);
      console.log('odjava');
      localStorage.removeItem('')
      this.ruter.navigate(['/']);
    }
    })
  }
  else{
    this.servis.updateAgencija(this.kor.username,this.agencija).subscribe((resp)=>{
      if(resp['message']=='ok'){
        this.messagetel='Telefon uspesno promenjen';
        let u=localStorage.getItem('loggedInUser');
        localStorage.removeItem(u);
        console.log('odjava');
        localStorage.removeItem('')
        this.ruter.navigate(['/']);
      }
      })
  }
}


changeEmail(){
  this.servis.updateEmail(this.kor.username,this.email).subscribe((resp)=>{
  
    let u=localStorage.getItem('loggedInUser');
    localStorage.removeItem(u);
    console.log('odjava');
    localStorage.removeItem('')
    this.ruter.navigate(['/']);
  })
}
logout(){
  let user=localStorage.getItem('loggedInUser');
  localStorage.removeItem(user);
  this.ruter.navigate(["/"]);
}

flagTelefon:boolean=false;
flagMejl:boolean=false;
promenaTelefona(){
  this.flagTelefon=true;
}
promenaMejla(){
this.flagMejl=true;
}

da(){
  this.dap=true;
}


}
