import express from "express"
import { getNewPage,detailsNewPage } from "../controller/newpageController"
const routerNewpage=express.Router()
    routerNewpage.get('/news', getNewPage)
    routerNewpage.get('/news/:id',detailsNewPage)
export {routerNewpage}