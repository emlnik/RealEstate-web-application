import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) {
    let user = localStorage.getItem("loggedInUser");
    if (user == null) {
      this.ruter.navigate(['homepage']);
    }
   }

  ngOnInit(): void {
  }
username:string;
oldPassword:string;
newPassword:string;
newPassword1:string;
requiredFields(): boolean {
  if (this.username == null || this.oldPassword == null || this.newPassword == null) {
    return false;
  } else {
    return true;
  }
}


message: string;

change() {
  if (this.requiredFields() == false) this.message = "Unesite sva polja";
  else {
    if (!(this.servis.checkPassword(this.newPassword))) this.message = "Nova lozinka nije u dobrom formatu";
    else {
      this.servis.findUser(this.username).subscribe((user: User) => {
        if (user == null) {
          this.message = "Ne postoji korisnik sa ovim korisnickim imenom";
        }
        else {
          if (user.password.localeCompare(this.oldPassword) != 0) this.message = "Trenutna lozinka nije tacna";
          else {
            if (user.password.localeCompare(this.newPassword) == 0) this.message = "Stara i nova lozinka moraju biti drugacije";
            else if(this.newPassword!=this.newPassword1) this.message="Niste dobro potvrdili novu lozinku";
            else {
              this.servis.changePassword(this.username, this.newPassword).subscribe(resp => {
                console.log(resp);
              })
              this.message = "Lozinka je promenjena";
              let u=localStorage.getItem('loggedInUser');
              localStorage.removeItem(u);
              console.log('odjava');
              localStorage.removeItem('')
              this.ruter.navigate(['/']);
            }


          }
        }
      })
    }
  }
}
}
