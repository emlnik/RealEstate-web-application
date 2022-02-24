import { RealEstate } from "./realestate";

export class User{

    username:string;
    password:string;
    firstname:string;
    lastname:string;
    city:string;
    bday:string
    email:string;
    agency:string//za kupca i admina null
    numlicence:string; //za kupca i admina null
    picture:string;
    phone:string;
    type:string; //admin, oglasavac i kupac
    valid:boolean;
    favorites:Array<number>;
}