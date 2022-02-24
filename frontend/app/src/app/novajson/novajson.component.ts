import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RealEstate } from 'src/models/realestate';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-novajson',
  templateUrl: './novajson.component.html',
  styleUrls: ['./novajson.component.css']
})
export class NovajsonComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) { }

  ngOnInit(): void {

    this.user=JSON.parse(localStorage.getItem('loggedInUser'));
    this.oglasavac=this.user.username;
    this.agencija=this.user.agency;
    this.servis.getAgencije().subscribe((data:RealEstate[])=>{
      this.realestates=data;
      console.log(this.realestates);
    })
    console.log(this.agencija);
    this.maxId();
  }
  selectedFile:File;
  slike:File[]=[];
  json:RealEstate=null;
  message:string;
  oglasavac:string;
  user:User;
  agencija:string;
  estate:RealEstate;
  id:number;
  realestates:RealEstate[]=[]
  file:string;
  maxId():void{
    let max=0;
    this.realestates.forEach((a)=>{
      if(a.Id>max)
        max=a.Id;
    })
    this.id=max;
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
     console.log(JSON.stringify(fileReader.result));
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
    console.log(this.selectedFile.name)
    this.file=this.selectedFile.name;
    console.log(this.file)
  }
  onFileSelected(event) {
    console.log(event.target.files);
    for(let i=0;i<event.target.files.length;i++)
    this.slike[i]=event.target.files[i]
    //this.slike = event.target.files[0]; 
    console.log(this.slike);
 
  }
  addAgency(){

    let photos=[];
      
      
    if(this.slike!=undefined){
      
      if(this.slike.length<3){
        this.message='Morate uneti najmanje 3 slike';
        alert(this.message)
        return
      }
      if(this.slike.length>6){
        this.message='Mozete uneti max 6 slika';
        alert(this.message)
        return
      }
   for(let i=0;i<this.slike.length;i++){
    console.log(this.slike[i].name)
    photos.push(this.slike[i].name)

   }
     
   

   }
   console.log(photos);
   this.servis.getJSON("/assets/"+this.selectedFile['name']).subscribe(data=>{
    this.json=data;
    console.log(this.json.Name)
    console.log(data)
    this.servis.addAgency(photos,this.json.Name ,this.json.Type, this.json.City,this.json.Municipality,this.json.Street,this.json.Microlocation,
      this.json.Area,this.json.Rooms,this.json.ConstructionYear,this.json.State,this.json.Heating,this.json.Floor,this.json.TotalFloors,
      this.json.Parking,this.oglasavac,this.agencija,this.json.MonthlyUtilities,this.json.Price,
      this.json.About,this.json.Characteristics,this.json.Sold).subscribe((resp)=>{
  if(resp['message']=='ok'){
  var existingEntries = JSON.parse(localStorage.getItem("realestates"));
  console.log(existingEntries);
  this.servis.getRE(this.json.Name).subscribe((data:RealEstate)=>{
  this.estate=data;
  console.log(this.estate)
  console.log(this.json.Name)
  })
  
  localStorage.setItem('nova',JSON.stringify(this.estate));
  existingEntries.push(this.estate);
  localStorage.setItem('realestates',JSON.stringify(existingEntries));
  
  this.message='uspesno dodato';
  alert(this.message);
  
  }
  else{
  this.message='neuspelo';
  alert(this.message)
  }
      })
  
  
    })
        
      }

  /**  this.servis.addAgency(photos,this.json.Name ,this.json.Type, this.json.City,this.json.Municipality,this.json.Street,this.json.Microlocation,
    this.json.Area,this.json.Rooms,this.json.ConstructionYear,this.json.State,this.json.Heating,this.json.Floor,this.json.TotalFloors,
    this.json.Parking,this.oglasavac,this.agencija,this.json.MonthlyUtilities,this.json.Price,
    this.json.About,this.json.Characteristics,this.json.Sold).subscribe((resp)=>{
if(resp['message']=='ok'){
var existingEntries = JSON.parse(localStorage.getItem("realestates"));
console.log(existingEntries);
this.servis.getRE(this.json.Name).subscribe((data:RealEstate)=>{
this.estate=data;
console.log(this.estate)
console.log(this.json.Name)
})

localStorage.setItem('nova',JSON.stringify(this.estate));
existingEntries.push(this.estate);
localStorage.setItem('realestates',JSON.stringify(existingEntries));

this.message='uspesno dodato';
alert(this.message);

}
else{
this.message='neuspelo';
alert(this.message)
}
    })


  }*/


}
