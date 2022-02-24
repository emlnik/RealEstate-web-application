import express from 'express'
import { RealEstateControler } from '../controllers/realestate.controller';

const realestateRouter=express.Router();

realestateRouter.route('/getNekretnine').get(
    (req,res)=> new RealEstateControler().getNekretnine(req,res)
)
realestateRouter.route('/search').post(
    (req,res)=> new RealEstateControler().search(req,res)
)
realestateRouter.route('/getRE').post(
    (req,res)=> new RealEstateControler().getRE(req,res)
)
realestateRouter.route('/getREMikro').post(
(req,res)=> new RealEstateControler().getREMikro(req,res)
)
realestateRouter.route('/getId').post(
    (req,res)=> new RealEstateControler().getId(req,res)
    )
    

realestateRouter.route('/getNekUser').post(
    (req,res)=> new RealEstateControler().getNekUser(req,res)
)
realestateRouter.route('/getREChange').post(
    (req,res)=> new RealEstateControler().getREChange(req,res)
)
realestateRouter.route('/updateNek').post(
    (req,res)=> new RealEstateControler().updateNek(req,res)
)
realestateRouter.route('/addAgency').post(
    (req,res)=> new RealEstateControler().addAgency(req,res)
)

export default realestateRouter;