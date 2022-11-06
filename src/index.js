import express from 'express';
import morgan from 'morgan';
import path from 'path'
import { fileURLToPath } from 'url';
import configViewEngine from './config/viewEngine';
import dotenv from "dotenv"


dotenv.config();
const app = express()
const port = process.env.PORT||3000

// app.use(morgan('combined'))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

configViewEngine(app)

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/newpage', (req, res) => {
  res.render('new');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})