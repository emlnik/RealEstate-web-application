import * as express from 'express'
import realestate from '../models/realestate'

export class RealEstateControler{
    getNekretnine=(req:express.Request,res:express.Response)=>{
        realestate.find({'Sold':false},(err,r)=>{
            if(err) console.log(err)
            else if(r){
                res.json(r)
            }
        })
    }
    search=(req:express.Request,res:express.Response)=>{
        let tip=req.body.Type;

        realestate.find({'Type':tip,'Sold':false},(err,r)=>{
if(err) console.log(err)
else if(r){
    res.json(r);
}
        })
    }

    getRE=(req:express.Request,res:express.Response)=>{
        let name=req.body.Name;

        realestate.findOne({'Name':name},(err,r)=>{
            if(err) console.log(err)
            else if(r){
                res.json(r)
            }
        })
    }
    getREMikro=(req:express.Request,res:express.Response)=>{
        let mikro=req.body.Microlocation;
        realestate.find({'Microlocation':mikro},(err,r)=>{
            if(err) console.log(err)
            else if(r){
                res.json(r)
            }
        })
    }
    getId=(req:express.Request,res:express.Response)=>{
        let i=req.body.Id;
        realestate.findOne({'Id':i},(err,re)=>{
            if(err) console.log(err)
            else if(re){
                res.json(re);
            }
        })
    }
    getNekUser=(req:express.Request,res:express.Response)=>{
        let korime=req.body.Oglasavac;
        realestate.find({'Oglasavac':korime},(err,re)=>{
            if(err) console.log(err)
            else if(re){
                res.json(re)
            }
        })
    }
    getREChange=(req:express.Request,res:express.Response)=>{
        let name=req.body.Name;

        realestate.findOne({'Name':name},(err,r)=>{
            if(err) console.log(err)
            else if(r){
              realestate.collection.updateOne({'Name':name},{$set:{'Sold':true}})
              res.json({'message':'ok'})
            }
            else
            res.json({'message':'error'})
        })
    }
    updateNek=(req:express.Request,res:express.Response)=>{
 
        let id=req.body.Name;
        let tip=req.body.Type;
        let grad=req.body.City;
        let opstina=req.body.Municipality;
        let mikrolokacija=req.body.Microlocation;
        let ulica=req.body.Street;
        let kvadratura=req.body.Area;
        let soba=req.body.Rooms;
        let godina=req.body.ConstructionYear;
        let stanje=req.body.State;
        let grejanje=req.body.Heating;
        let sprat=req.body.Floor;
        let spratnost=req.body.TotalFloors;
        let parking=req.body.Parking;
        let troskovi=req.body.MonthlyUtilities;
        let cena=req.body.Price;
        let opis=req.body.About;
        let characteristic=req.body.Characteristics;
        let slike=req.body.Pictures;
        let agencija=req.body.Agencija;

        realestate.findOne({'Name':id},(err,r)=>{
            if(err) console.log(err);
            else if(r){
                realestate.collection.updateOne({'Name':id},{$set:{'Name':id,
            'Type':tip,
        'City':grad,
    'Municipality':opstina,
'Microlocation':mikrolokacija,
'Street':ulica,
'Area':kvadratura,
'Rooms':soba,
'ConstructionYear':godina,
'State':stanje,
'Heating':grejanje,
'Floor':sprat,
'TotalFloors':spratnost,
'Parking':parking,
'MonthlyUtilities':troskovi,
'Price':cena,
"Agencija":agencija,
'About':opis,
'Characteristics':characteristic,
'Pictures':slike}})
res.json({'message':'ok'})
            }
            else{
                res.json({'message':'error'})
            }
        })
    }

    addAgency=(req:express.Request,res:express.Response)=>{
        let re=new realestate(req.body);
        re.save().then((re)=>{
            res.status(200).json({'message':'ok'})
        }).catch(err=>{
            res.status(400).json({'message':'error'})
        })
    }
}