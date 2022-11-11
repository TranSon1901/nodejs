import { routerNewpage } from './routerNewpage'
import { routersite } from './site'
import { apiRouter } from './apiRouter'
 const inItRouter=(app)=>{
      app.use('/',routerNewpage)
      app.use('/',routersite)
      app.use('/',apiRouter)
 }
 export default inItRouter