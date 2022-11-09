import express from "express";
import { getHomePage ,getAboutPage, getContactPage ,createUsers,deteleUsers,getEdit} from '../controller/siteController'
const routersite=express.Router()
   routersite.get('/', getHomePage )
   routersite.get('/about',getAboutPage)
   routersite.get('/contact',getContactPage)
   routersite.get('/getUser/:id',getEdit)
   // routersite.get('/getUser',getUpdate)
   routersite.post('/create-users',createUsers)
   routersite.post('/delete-users',deteleUsers)
export {routersite}