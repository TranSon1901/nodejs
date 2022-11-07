import express from "express";
import { getHomePage ,getAboutPage} from '../controller/siteController'
const routersite=express.Router()
   routersite.get('/', getHomePage )
   routersite.get('/about',getAboutPage)
export {routersite}