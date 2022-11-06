import express from 'express'
import { engine } from 'express-handlebars';



const configViewEngine=(app)=>{
    app.engine('handlebars', engine());
    app.set('view engine', 'handlebars');
    app.set('views',"./src/resource/views");
    app.use(express.static("./src/public"));
}
export default configViewEngine