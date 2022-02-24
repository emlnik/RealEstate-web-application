import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit {

  constructor(private ruter:Router) { }

  ngOnInit(): void {
    this.ulogovan=JSON.parse(localStorage.getItem('loggedInUser'));
    this.userIme=this.ulogovan.firstname;
    this.userPrezime=this.ulogovan.lastname;

  }

  ulogovan:User;
  userIme:string;
  userPrezime:string;

  logout(){
    let user=localStorage.getItem('loggedInUser');
    localStorage.removeItem(user);
    this.ruter.navigate(["/"]);
  }

}
