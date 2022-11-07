import express from 'express'
import { routerNewpage } from './newpage'
import { routersite } from './site'
 const inItRouter=(app)=>{
      app.use('/new',routerNewpage)
      app.use('/',routersite)
 }
 export default inItRouter