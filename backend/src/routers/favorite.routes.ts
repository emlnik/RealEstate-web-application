import express from 'express'
import { FavControler } from '../controllers/favorites.controller';

const favRouter=express.Router();

favRouter.route('/dodajFav').post(
    (req,res)=> new FavControler().dodajFav(req,res)
)
favRouter.route('/getUserFav').post(
    (req,res)=> new FavControler().getUserFav(req,res)
)
favRouter.route('/ukloni').post(
    (req,res)=> new FavControler().ukloni(req,res)
)

export default favRouter;