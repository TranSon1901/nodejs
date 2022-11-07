import express from 'express'
import { routerNewpage } from './newpage'
import { routersite } from './site'
 const inItRouter=(app)=>{
      app.use('/news',routerNewpage)
      app.use('/',routersite)
 }
 export default inItRouter