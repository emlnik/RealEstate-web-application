import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import userRouter from './routers/user.routes';
import agencijaRouter from './routers/agencija.routes';
import realestateRouter from './routers/realestate.routes';
import favRouter from './routers/favorite.routes';



const app = express();
app.use(cors());
app.use(bodyParser.json());;

mongoose.connect('mongodb://localhost:27017/projekat');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('db connection ok')
})
const router = express.Router();
router.use('/users',userRouter);
router.use('/agencies',agencijaRouter);
router.use('/realestates',realestateRouter);
router.use('/favorites',favRouter)

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));