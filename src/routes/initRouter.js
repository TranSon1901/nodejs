import express from 'express'
import { getHomePage,getNewPage } from '../controller/homeController'
 const router=express.Router()

 const inItRouter=(app)=>{
      router.get('/',getHomePage)
      router.get('/newpage',getNewPage)
      return app.use('/',router)
      
 }
 export default inItRouter