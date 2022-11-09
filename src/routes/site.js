import express from "express";
import { getHomePage ,getAboutPage, getContactPage ,createUsers,deteleUsers,getEdit,update} from '../controller/siteController'
const routersite=express.Router()
   routersite.get('/', getHomePage )
   routersite.get('/about',getAboutPage)
   routersite.get('/contact',getContactPage)
   routersite.get('/getUser/:id',getEdit)
   routersite.post('/create-users',createUsers)
   routersite.post('/delete-users',deteleUsers)
   routersite.post('/Update',update)
export {routersite}