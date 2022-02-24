import { Agencija, Advertiser } from "./advertiser"


export class RealEstate{
    Id:number
    Name:string
    Type:string
    City:string
    Municipality:string
    Microlocation:string
    Street:string   
    Area:number
    Rooms:number
    ConstructionYear:number
    State:string
    Heating:string
    Floor:number
    TotalFloors:number
    Parking:string
    MonthlyUtilities:number
    Price:number
    About:string
    Characteristics:Array<string>
    Pictures:Array<string>
    Oglasavac:string
    Agencija:string
    Sold:boolean
    randomSlika:string
}