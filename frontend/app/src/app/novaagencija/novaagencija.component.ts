import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-novaagencija',
  templateUrl: './novaagencija.component.html',
  styleUrls: ['./novaagencija.component.css']
})
export class NovaagencijaComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) { }

  ngOnInit(): void {
  }

  naziv:string;
  grad:string;
  telefon:string;
  adresa:string;
  pib:string;
  message:string;

  ubaci(){
    if(this.adresa==null || this.grad==null || this.naziv==null || this.pib==null || this.telefon==null) this.message='Morate uneti sva polja';
    else{
this.servis.dodajAgenciju(this.naziv,this.grad,this.telefon,this.adresa,this.pib).subscribe((resp)=>{
  if(resp['message']=='ok'){
    this.ruter.navigate(['/admin'])
  }
})
  }
}

}
