import express from 'express'
import { AgencijaControler } from '../controllers/agency.controller';

const agencijaRouter=express.Router();

agencijaRouter.route('/dodajAgenciju').post(
    (req,res)=> new AgencijaControler().dodajAgenciju(req,res)
)
agencijaRouter.route('/findAgency').post(
    (req,res)=> new AgencijaControler().findAgency(req,res)
)

export default agencijaRouter;