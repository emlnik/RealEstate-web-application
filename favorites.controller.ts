import * as express from 'express'
import favorites from '../models/favorites'

export class FavControler{

    dodajFav=(req:express.Request,res:express.Response)=>{
        let fav=new favorites(req.body);

        fav.save().then((f)=>{
            res.status(200).json({'message':'ok'})
        }).catch(err=>{
            res.status(400).json({'message':'error'})
        })
    }
    getUserFav=(req:express.Request,res:express.Response)=>{
        let u=req.body.username;

        favorites.find({'username':u},(err,favs)=>{
            if(err) console.log(err)
            else if(favs){
                res.json(favs);
            }
        })
    }
    ukloni=(req:express.Request,res:express.Response)=>{
        let u=req.body.username;
        let i=req.body.id;

        favorites.findOne({'username':u,'id':i},(err,f)=>{
            if(err) console.log(err)
            else if(f){
                favorites.collection.deleteOne({'username':u,'id':i})
                res.json({'message':'ok'})
            }
            else{
                res.json({'message':'error'})
            }
        })
    }
}