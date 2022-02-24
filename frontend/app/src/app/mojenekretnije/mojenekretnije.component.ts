import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RealEstate } from 'src/models/realestate';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mojenekretnije',
  templateUrl: './mojenekretnije.component.html',
  styleUrls: ['./mojenekretnije.component.css']
})
export class MojenekretnijeComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) { }

  ngOnInit(): void {
    this.ulogovan=JSON.parse(localStorage.getItem('loggedInUser'));
    this.servis.getNekUser(this.ulogovan.username).subscribe((data:RealEstate[])=>{
      this.rezultati=data;
      console.log(this.rezultati)
    })
  }

  ulogovan:User;
  rezultati:RealEstate[];
  


  
prodato(c){
  this.servis.getREChange(c).subscribe((resp)=>{
    if(resp['message']=='ok'){
      this.servis.getNekUser(this.ulogovan.username).subscribe((data:RealEstate[])=>{
        this.rezultati=data;
        console.log(this.rezultati)
      })
    }
  })
}

azuriraj(id){
  localStorage.setItem('nekretninaazuriraj',id);
  this.ruter.navigate(['/azuriranjenekretnine']);
}



  }


