import express from "express";
import { getHomePage ,getAboutPage, getContactPage ,createUsers} from '../controller/siteController'
const routersite=express.Router()
   routersite.get('/', getHomePage )
   routersite.get('/about',getAboutPage)
   routersite.get('/contact',getContactPage)
   routersite.post('/create-users',createUsers)
export {routersite}