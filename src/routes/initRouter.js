import express from 'express'
import { routerNewpage } from './routerNewpage'
import { routersite } from './site'
 const inItRouter=(app)=>{
      app.use('/',routerNewpage)
      app.use('/',routersite)
 }
 export default inItRouter