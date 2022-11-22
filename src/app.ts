import express from 'express';
import cors from 'cors';
import { router } from './routes';
import db from './config/mongo';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use(router)
db().then(()=>{
    console.log('**** CONEXION CORRECTA ****');
}).catch(()=>{
    console.log('**** FALLA EN LA CONEXION DB ****');
})

app.listen(PORT, ()=> {
    console.log(`Servidor Listening on port ${PORT}`);
});



