import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AzuriranjeComponent } from './azuriranje/azuriranje.component';
import { AzuriranjenekretnineComponent } from './azuriranjenekretnine/azuriranjenekretnine.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { DodajkorisnikaComponent } from './dodajkorisnika/dodajkorisnika.component';
import { HomepageComponent } from './homepage/homepage.component';
import { KupacComponent } from './kupac/kupac.component';
import { LoginComponent } from './login/login.component';
import { MojenekretnijeComponent } from './mojenekretnije/mojenekretnije.component';
import { NekretninadetaljiComponent } from './nekretninadetalji/nekretninadetalji.component';
import { NovaagencijaComponent } from './novaagencija/novaagencija.component';
import { NovajsonComponent } from './novajson/novajson.component';
import { NovanekretninaComponent } from './novanekretnina/novanekretnina.component';
import { OglasavacComponent } from './oglasavac/oglasavac.component';
import { OglasavacpodaciComponent } from './oglasavacpodaci/oglasavacpodaci.component';
import { OmiljeneComponent } from './omiljene/omiljene.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { PrikazpretrageComponent } from './prikazpretrage/prikazpretrage.component';
import { RegistracijaComponent } from './registracija/registracija.component';

const routes: Routes = [
{path:'',component:HomepageComponent},
{path:'kupac',component:KupacComponent},
{path:'login',component:LoginComponent},
{path:'changepass',component:ChangepassComponent},
{path:'oglasavac',component:OglasavacComponent},
{path:'admin',component:AdminComponent},
{path:'register',component:RegistracijaComponent},
{path:'dodaj',component:DodajkorisnikaComponent},
{path:'dodajAgenciju',component:NovaagencijaComponent},
{path:'azuriranje',component:AzuriranjeComponent},
{path:'pretraga',component:PretragaComponent},
{path:'prikazpretrage',component:PrikazpretrageComponent},
{path:'nekretninadetalji',component:NekretninadetaljiComponent},
{path:'mojenekretnine',component:MojenekretnijeComponent},
{path:'azuriranjenekretnine',component:AzuriranjenekretnineComponent},
{path:'oglasavacpodaci',component:OglasavacpodaciComponent},
{path:'novanekretnina',component:NovanekretninaComponent},
{path:'omiljene',component:OmiljeneComponent},
{path:'novajson',component:NovajsonComponent},
{path:'**',component:HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
