import express from 'express'
import { engine } from 'express-handlebars';

const configViewEngine=(app)=>{
    app.engine('hbs', engine({
        extname:'.hbs'
    }));
    app.set('view engine','hbs');
    app.set('views','./src/resource/views');
    app.use(express.static('./src/public'));
}
export default configViewEngine