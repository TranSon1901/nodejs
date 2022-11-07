import express from "express";
import { getHomePage ,getAboutPage, getContactPage} from '../controller/siteController'
const routersite=express.Router()
   routersite.get('/', getHomePage )
   routersite.get('/about',getAboutPage)
   routersite.get('/contact',getContactPage)
export {routersite}