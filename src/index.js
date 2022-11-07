import express from 'express';
import morgan from 'morgan';
import path from 'path'
import { fileURLToPath } from 'url';
import configViewEngine from './config/viewEngine';
import dotenv from "dotenv"
import inItRouter from './routes/initRouter'
import connection from './config/connetDB'
dotenv.config();
const app = express()
const port = process.env.PORT||3000

// app.use(morgan('combined'))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

configViewEngine(app)

inItRouter(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})