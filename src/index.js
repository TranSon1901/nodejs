import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path'
import { fileURLToPath } from 'url';

const app = express()
const port = 3000

app.use(morgan('combined'))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views',  path.join(__dirname, '/resource/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})