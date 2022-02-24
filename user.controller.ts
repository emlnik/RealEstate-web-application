import * as express from 'express'
import Agencija from '../models/agencija';
import User from '../models/user'

export class UserControler{
  
    login=(req:express.Request,res:express.Response)=>{
        let korime=req.body.username;
        let loz=req.body.password;
        User.findOne({'username':korime,'password':loz},(err,u)=>{
            if(err) console.log(err)
            else 
                res.json(u);
            
        })
    }
    getAgencije=(req:express.Request,res:express.Response)=>{
        Agencija.find({},(err,a)=>{
            if(err) console.log(err)
            else if(a){
                res.json(a)
            }
        })
    }

    getSviKorisnici=(req:express.Request,res:express.Response)=>{
        User.find({'valid':true},(err,u)=>{
            if(err) console.log(err)
            else if(u){
                res.json(u)
            }
        })
    }
    register=(req:express.Request,res:express.Response)=>{
        let user=new User(req.body);
    user.save().then(user=>{
        res.status(200).json({'message':'ok'})
    }).catch(err=>{
        res.status(400).json({'message':'error'})
    })
    }
    register1=(req:express.Request,res:express.Response)=>{
        let user=new User(req.body);
    user.save().then(user=>{
        res.status(200).json({'message':'ok'})
    }).catch(err=>{
        res.status(400).json({'message':'error'})
    })
    }
    register2=(req:express.Request,res:express.Response)=>{
        let user=new User(req.body);
    user.save().then(user=>{
        res.status(200).json({'message':'ok'})
    }).catch(err=>{
        res.status(400).json({'message':'error'})
    })
    }
    getUsersOnHold=(req:express.Request,res:express.Response)=>{
        let flag=false;
      
        User.find({'valid':flag},(err,users)=>{
            if(err) console.log(err);
            else if(users){
                res.json(users)
            }
        })
    }

    prihvati=(req:express.Request,res:express.Response)=>{
        let korime=req.body.username;
        User.findOne({'username':korime},(err,u)=>{
            if(err) console.log(err)
            else if(u){
                User.collection.updateOne({'username':korime},{$set:{'valid':true}})
                res.json({'message':'ok'})
            }
            else res.json({'messsage':'error'})
        })
    }
    odbij=(req:express.Request,res:express.Response)=>{
        let korime=req.body.username;
        User.findOne({'username':korime},(err,u)=>{
            if(err) console.log(err)
            else if(u){
                User.collection.deleteOne({'username':korime})
                res.json({'message':'ok'})
            }
            else res.json({'messsage':'error'})
        })
    }
    findUser = (req: express.Request, res: express.Response) => {
        let username = req.body.username;

        User.findOne({ 'username': username },
            (err, users) => {
                if (err) console.log(err);
                else res.json(users);
            })
    }


    changePassword = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;

        User.collection.updateOne({ 'username': username }, { $set: { 'password': password } });
        res.json({ 'message': 'password changed' });
    }
    azurirajKor=(req:express.Request,res:express.Response)=>{
        let korime=req.body.username;
        let ime=req.body.firstname;
        let prezime=req.body.lastname;
        let bday=req.body.bday;
        let phone=req.body.phone;

        User.findOne({'username':korime},(err,u)=>{
            if(err) console.log(err)
            else if(u){
                User.collection.updateOne({'username':korime},{$set:{'firstname':ime,'lastname':prezime,'bday':bday,'phone':phone}})
                res.json({'message':'ok'})
            }
            else{
                res.json({'message':'error'})
            }
        })
    }
    azurirajOglasivaca=(req:express.Request,res:express.Response)=>{
        let korime=req.body.username;
        let ime=req.body.phone;
        let prezime=req.body.email;
        let a=req.body.agency;

        User.findOne({'username':korime},(err,u)=>{
            if(err) console.log(err)
            else if(u){
                User.collection.updateOne({'username':korime},{$set:{'phone':ime,'email':prezime,'agency':a}})
                res.json({'message':'ok'})
            }
            else{
                res.json({'message':'error'})
            }
        })
    }
    updateTelefon=(req:express.Request,res:express.Response)=>{
        let u=req.body.username;
        let tel=req.body.phone;

        User.findOne({'username':u},(err,userr)=>{
            if(err) console.log(err)
            else if(userr){
                User.collection.updateOne({'username':u},{$set:{'phone':tel}})
                res.json({'message':'ok'})
            }
            else{
                res.json({'message':'error'})
            }
        })
    }
    updateEmail=(req:express.Request,res:express.Response)=>{
        let u=req.body.username;
        let tel=req.body.email;

        User.findOne({'username':u},(err,userr)=>{
            if(err) console.log(err)
            else if(userr){
                User.collection.updateOne({'username':u},{$set:{'email':tel}})
                res.json({'message':'ok'})
            }
            else{
                res.json({'message':'error'})
            }
        })
    }
    updateAgencija=(req:express.Request,res:express.Response)=>{
        let u=req.body.username;
        let tel=req.body.agency;

        User.findOne({'username':u},(err,userr)=>{
            if(err) console.log(err)
            else if(userr){
                User.collection.updateOne({'username':u},{$set:{'agency':tel}})
                res.json({'message':'ok'})
            }
            else{
                res.json({'message':'error'})
            }
        })
    }
    updateAgencija1=(req:express.Request,res:express.Response)=>{
        let u=req.body.username;
        let tel=req.body.agency;
        let lic=req.body.numlicence;

        User.findOne({'username':u},(err,userr)=>{
            if(err) console.log(err)
            else if(userr){
                User.collection.updateOne({'username':u},{$set:{'agency':tel,'numlicence':lic}})
                res.json({'message':'ok'})
            }
            else{
                res.json({'message':'error'})
            }
        })
    }

 
}