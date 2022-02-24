import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RealEstate } from 'src/models/realestate';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-oglasavac',
  templateUrl: './oglasavac.component.html',
  styleUrls: ['./oglasavac.component.css']
})
export class OglasavacComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) { }

  ngOnInit(): void {
    this.ulogovan=JSON.parse(localStorage.getItem('loggedInUser'));
    this.userIme=this.ulogovan.firstname;
    this.userPrezime=this.ulogovan.lastname;
    this.userTel=this.ulogovan.phone;
    this.userMejl=this.ulogovan.email;
    this.servis.getNekUser(this.ulogovan.username).subscribe((data:RealEstate[])=>{
      this.rezultati=data;
      console.log(this.rezultati)
    })

  }

  ulogovan:User;
  userIme:string;
  userPrezime:string;
  userTel:string;
  userMejl:string;
  prodatoFlag=false;

  logout(){
    let user=localStorage.getItem('loggedInUser');
    localStorage.removeItem(user);
    this.ruter.navigate(["/"]);
  }
  rezultati:RealEstate[];

  prodato(c){
    this.servis.getREChange(c.Name).subscribe((resp)=>{
      if(resp['message']=='ok'){
        this.servis.getNekUser(this.ulogovan.username).subscribe((data:RealEstate[])=>{
          this.rezultati=data;
          this.prodatoFlag=true;
          console.log(this.rezultati)
        })
      }
    })
  }

}
