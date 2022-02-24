import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 
 
    
  }

  uri='http://localhost:4000'





  login(korime,loz){
    const data={
      username:korime,
      password:loz
    }
    return this.http.post(`${this.uri}/users/login`,data)
  }

  getAgencije(){
    return this.http.get(`${this.uri}/users/getAgencije`)
  }

  getSviKorisnici(){
    return this.http.get(`${this.uri}/users/getSviKorisnici`)
  }
  
  public getJSON(jsonFile):Observable<any>{

    return this.http.get(jsonFile);
  }

  register(username,password,ime,prezime,grad,bday,email,pib,licenca,avatar,tel,tip){
    let data={
      username:username,
      password:password,
      firstname:ime,
      lastname:prezime,
      city:grad,
      bday:bday,
      email:email,
      agency:pib,
      numlicence:licenca,
      picture:avatar,
      phone:tel,
      type:tip,
      valid:false
    }
    return this.http.post(`${this.uri}/users/register`,data)

  }
  register1(username,password,ime,prezime,grad,bday,email,slika,tel,tip){
    let data={
      username:username,
      password:password,
      firstname:ime,
      lastname:prezime,
      city:grad,
      bday:bday,
      email:email,
      agency:null,
      numlicence:null,
      picture:slika,
      phone:tel,
      type:tip,
      valid:false
    }
    return this.http.post(`${this.uri}/users/register1`,data)

  }
  register2(username,password,ime,prezime,grad,bday,email,slika,tel,tip){
    let data={
      username:username,
      password:password,
      firstname:ime,
      lastname:prezime,
      city:grad,
      bday:bday,
      email:email,
      agency:null,
      numlicence:null,
      picture:slika,
      phone:tel,
      type:tip,
      valid:false
    }
    return this.http.post(`${this.uri}/users/register2`,data)

  }
  getUsersOnHold(){
  
    return this.http.get(`${this.uri}/users/getUsersOnHold`)
  }
prihvati(user){
 let data={
    username:user
  }
  return this.http.post(`${this.uri}/users/prihvati`,data)
}
odbij(user){
 let data={
    username:user
  }
  return this.http.post(`${this.uri}/users/odbij`,data)
}
checkPassword(password: string): boolean{
  var regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,24}$/;
  if(!regularExpression.test(password)) {
  
    return false;
  }
  return true;
    
}
obrisi(user){
  let data={
    username:user
  }
  return this.http.post(`${this.uri}/users/odbij`,data)
}


changePassword(username, password){
  const data = {
    username: username,
    password: password
  }
  return this.http.post(`${this.uri}/users/changePassword`, data);
}
findUser(username){
  const data = {
    username: username
  }
  return this.http.post(`${this.uri}/users/findUser`, data);
}
dodajAgenciju(ime,grad,pib,adresa,telefon){
  const data={
    name:ime,
    city:grad,
    address:adresa,
    pib:pib,
    phone:telefon
  }
  return this.http.post(`${this.uri}/agencies/dodajAgenciju`,data)
}
azurirajKor(user,i,p,b,t){
  const data={
    firstname:i,
    lastname:p,
    username:user,
    bday:b,
    phone:t
  }
  return this.http.post(`${this.uri}/users/azurirajKor`,data)
}
azurirajOglasivaca(user,t,e,a){
  const data={
    username:user,
    phone:t,
    email:e,
    agency:a
  }
  return this.http.post(`${this.uri}/users/azurirajOglasivaca`,data)
}
getNekretnine(){
  return this.http.get(`${this.uri}/realestates/getNekretnine`)
}
search(tip){
  const data={
    Type:tip
  }
  return this.http.post(`${this.uri}/realestates/search`,data)
}
getRE(name){
  const data={
    Name:name
  }
  return this.http.post(`${this.uri}/realestates/getRE`,data)
}
getREMikro(mikro){
  const data={
    Microlocation:mikro
  }

  return this.http.post(`${this.uri}/realestates/getREMikro`,data)
}
getREId(id){
  const data={
    Id:id
  }
  return this.http.post(`${this.uri}/realestates/getId`,data)
}
findAgency(name){
  const data={
    name:name
  }
  return this.http.post(`${this.uri}/agencies/findAgency`,data)
}
getNekUser(korime){
  const data={
    Oglasavac:korime
  }
  return this.http.post(`${this.uri}/realestates/getNekUser`,data)
}
getREChange(name){
  const data={
    Name:name
  }
  return this.http.post(`${this.uri}/realestates/getREChange`,data)
}
updateNek(
  id,
  tip,
 grad,
 opstina,
mikrolokacija,
 ulica,
kvadratura,
 soba,
 godina,
 stanje,
 grejanje,
 sprat,
 spratnost,
  parking,
troskovi,
  cena,
 opis,
 characteristic,
 slike){
  const data={
  
  Name: id,
 Type: tip,
 City:grad,
 Municipality:opstina,
Microlocation:mikrolokacija,
 Street:ulica,
Area: kvadratura,
 Rooms:soba,
 ConstructionYear:godina,
 State:stanje,
 Heating:grejanje,
 Floor:sprat,
 TotalFloors:spratnost,
 Parking: parking,
MonthlyUtilities:troskovi,
  Price:cena,
 About:opis,
 Characteristics:characteristic,
 Pictures:slike
  }
  return this.http.post(`${this.uri}/realestates/updateNek`,data)
}

updateTelefon(user,tel){
  const data={
    username:user,
    phone:tel
  }
return this.http.post(`${this.uri}/users/updateTelefon`,data);
}
updateEmail(user,tel){
  const data={
    username:user,
    email:tel
  }
return this.http.post(`${this.uri}/users/updateEmail`,data);
}
updateAgencija(user,tel){
  const data={
    username:user,
    agency:tel
  }
return this.http.post(`${this.uri}/users/updateAgencija`,data);
}
updateAgencija1(user,tel,lic){
  const data={
    username:user,
    agency:tel,
    numlicence:lic
  }
return this.http.post(`${this.uri}/users/updateAgencija1`,data);
}
addAgency(photos, tip, naziv,grad,opstina,ulica,mikrolokacija,
  kvadratura,soba,godina,stanje,grejanje,sprat,spratnost,
  parking,oglasavac,agencija,troskovi,cena,
  opis,characteristic,sold){
    const data={
      Type:naziv,
      Name:tip,
      Pictures:photos,
      City:grad,
      Municipality:opstina,
      Street:ulica,
      Microlocation:mikrolokacija,
      Area:kvadratura,
      Rooms:soba,
      ConstructionYear:godina,
      State:stanje,
      Heating:grejanje,
      Floor:sprat,
      TotalFloors:spratnost,
      Parking:parking,
      Oglasavac:oglasavac,
      Agencija:agencija,
      MonthlyUtilities:troskovi,
      Price:cena,
      About:opis,
      Characteristics:characteristic,
      Sold:sold

    }
    return this.http.post(`${this.uri}/realestates/addAgency`,data)
  }
dodajFav(id,user){
  const data={
    username:user,
    id:id
  }
  return this.http.post(`${this.uri}/favorites/dodajFav`,data)
}
getUserFav(id){
  const data={
    username:id
  }
  return this.http.post(`${this.uri}/favorites/getUserFav`,data)
}

ukloni(id,u){
  const data={
    username:u,
    id:id
  }
  return this.http.post(`${this.uri}/favorites/ukloni`,data)
}

}
