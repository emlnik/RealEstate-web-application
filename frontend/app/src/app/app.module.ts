import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { KupacComponent } from './kupac/kupac.component';
import { OglasavacComponent } from './oglasavac/oglasavac.component';
import { AdminComponent } from './admin/admin.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { HomepageComponent } from './homepage/homepage.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { DodajkorisnikaComponent } from './dodajkorisnika/dodajkorisnika.component';
import { NovaagencijaComponent } from './novaagencija/novaagencija.component';
import { AzuriranjeComponent } from './azuriranje/azuriranje.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { PrikazpretrageComponent } from './prikazpretrage/prikazpretrage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NekretninadetaljiComponent } from './nekretninadetalji/nekretninadetalji.component';
import { MojenekretnijeComponent } from './mojenekretnije/mojenekretnije.component';
import { AzuriranjenekretnineComponent } from './azuriranjenekretnine/azuriranjenekretnine.component';
import { OglasavacpodaciComponent } from './oglasavacpodaci/oglasavacpodaci.component';
import { NovanekretninaComponent } from './novanekretnina/novanekretnina.component';
import { OmiljeneComponent } from './omiljene/omiljene.component';
import { NovajsonComponent } from './novajson/novajson.component';
import { RecaptchaModule } from 'ng-recaptcha';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KupacComponent,
    OglasavacComponent,
    AdminComponent,
    RegistracijaComponent,
    HomepageComponent,
    ChangepassComponent,
    DodajkorisnikaComponent,
    NovaagencijaComponent,
    AzuriranjeComponent,
    PretragaComponent,
    PrikazpretrageComponent,
    NekretninadetaljiComponent,
    MojenekretnijeComponent,
    AzuriranjenekretnineComponent,
    OglasavacpodaciComponent,
    NovanekretninaComponent,
    OmiljeneComponent,
    NovajsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    NgbModule,
    NgHcaptchaModule.forRoot({
      siteKey:'ce1db020-07be-487d-a645-5684847a7222',
      languageCode:'en'
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
