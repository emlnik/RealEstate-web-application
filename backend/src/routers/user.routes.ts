import express from 'express'



import { UserControler } from '../controllers/user.controller'


const userRouter=express.Router()

userRouter.route('/login').post(
    (req,res)=> new UserControler().login(req,res)
)

userRouter.route('/getAgencije').get(
    (req,res)=> new UserControler().getAgencije(req,res)
)

userRouter.route('/getSviKorisnici').get(
    (req,res)=> new UserControler().getSviKorisnici(req,res)
)
userRouter.route('/register').post(
    (req,res)=> new UserControler().register(req,res)
)
userRouter.route('/register1').post(
    (req,res)=> new UserControler().register1(req,res)
)
userRouter.route('/register2').post(
    (req,res)=> new UserControler().register2(req,res)
)
userRouter.route('/getUsersOnHold').get(
    (req,res)=> new UserControler().getUsersOnHold(req,res)
)
userRouter.route('/prihvati').post(
    (req,res) => new UserControler().prihvati(req,res)
)
userRouter.route('/odbij').post(
    (req,res) => new UserControler().odbij(req,res)
)
userRouter.route('/changePassword').post(
    (req,res) => new UserControler().changePassword(req,res)
)
userRouter.route('/findUser').post(
    (req,res)=> new UserControler().findUser(req,res)
)
userRouter.route('/azurirajKor').post(
    (req,res)=> new UserControler().azurirajKor(req,res)
)
userRouter.route('/azurirajOglasivaca').post(
    (req,res)=> new UserControler().azurirajOglasivaca(req,res)
)
userRouter.route('/updateTelefon').post(
    (req,res)=> new UserControler().updateTelefon(req,res)
)
userRouter.route('/updateEmail').post(
    (req,res)=> new UserControler().updateEmail(req,res)
)
userRouter.route('/updateAgencija').post(
    (req,res)=> new UserControler().updateAgencija(req,res)
)
userRouter.route('/updateAgencija1').post(
    (req,res)=> new UserControler().updateAgencija1(req,res)
)



export default userRouter;