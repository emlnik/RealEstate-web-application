import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ruter:Router,private servis:UserService) { }

  ngOnInit(): void {
   

  }

  username:string;
  password:string;
  message:string;
  messagePodaci:string;

  requiredFields(): boolean {
    if (this.username == null || this.password == null) {
      return false;
    } else {
      return true;
    }
  }

  user: any = null;


  callback(res: any) {

    if (res && res.password) {

      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password)
      this.user = res;
      if (this.user.valid == false) {this.message="Korisnik nije odobren";
      console.log(this.message);
    }
      else {
        localStorage.setItem('loggedInUser', JSON.stringify(this.user));
        if (this.user.type == 'kupac') {
          this.ruter.navigate(['kupac']);
        }
        else if (this.user.type == 'oglasavac') {
          this.ruter.navigate(['oglasavac'])
        }
        else {
          this.ruter.navigate(['admin']);
        }
      }


    }
    else{ 
  this.message='Netacni podaci';
   
  }
  }


  login() {
    if (this.requiredFields() == false) {this.message = "Morate uneti sva polja";  console.log(this.message)}
    this.servis.login(this.username, this.password).subscribe(res => this.callback(res));
  }

}
