import * as express from 'express'
import agencija from '../models/agencija'

export class AgencijaControler{

    dodajAgenciju=(req:express.Request,res:express.Response)=>{
        let a=new agencija(req.body);

        a.save().then((agen)=>{
            res.status(200).json({'message':'ok'})
        }).catch(err=>{
            res.status(400).json({'message':'error'})
        })

        
    }
    findAgency=(req:express.Request,res:express.Response)=>{
        let n=req.body.name;

        agencija.findOne({'name':n},(err,a)=>{
            if(err) console.log(err)
            else if(a){
                res.json(a)
            }
        })
    }
}