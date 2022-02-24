import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { convertTypeAcquisitionFromJson, StringLiteralLike } from 'typescript';
import { UserService } from '../user.service';

@Component({
  selector: 'app-azuriranje',
  templateUrl: './azuriranje.component.html',
  styleUrls: ['./azuriranje.component.css']
})
export class AzuriranjeComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) { }

  ngOnInit(): void {
    this.servis.findUser(localStorage.getItem('username')).subscribe((data:User)=>{
this.kor=data;
this.ime=data.firstname;
this.prezime=data.lastname;
this.bday=data.bday;
this.phone=data.phone;


    })
  }

  kor:User;
  ime:string;
  prezime:string;
  message:string;
  bday:string;
  phone:string;
  user:string;

 

  update(){
    this.servis.azurirajKor(localStorage.getItem('username'),this.ime,this.prezime,this.bday,this.phone).subscribe((resp)=>{
      if(resp['message']='ok'){
        this.message='Uspesno promenjeno';
        this.ruter.navigate(['/admin'])
      }
      else{
        this.message='Neuspelo azuriranje'
      }
    })
  }

}
