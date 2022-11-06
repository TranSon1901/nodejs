import express from 'express';
import morgan from 'morgan';
import path from 'path'
import { fileURLToPath } from 'url';
import configViewEngine from './config/viewEngine';

const app = express()
const port = 3001
// app.use(morgan('combined'))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

configViewEngine(app)

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})