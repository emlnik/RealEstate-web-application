import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RealEstate } from 'src/models/realestate';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) { }

  ngOnInit(): void {
    this.servis.getNekretnine().subscribe((data:RealEstate[])=>{
      this.nekretnine=data;
      this.nekretnine.forEach((n)=>{
        n.randomSlika=n.Pictures[Math. floor(Math. random()*n.Pictures. length)]
      })
      console.log(this.nekretnine);
      this.duzina=this.nekretnine.length-1;
      console.log(this.nekretnine[this.duzina])
      let flag=5;
  while(flag>0){
   
      this.nekretnine5.push(this.nekretnine[this.duzina]);
      flag--;
      this.duzina--;
   
    console.log(this.nekretnine5);
  }
  
    })
   
    
  }

  nekretnine:RealEstate[];
  slika:string;
  nekretnine5:RealEstate[]=[];
duzina:number;


}
