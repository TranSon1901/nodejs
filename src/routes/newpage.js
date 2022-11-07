import express from "express"
import { getNewPage,detailsNewPage } from "../controller/newpageController"
const routerNewpage=express.Router()
    routerNewpage.get('/', getNewPage)
    routerNewpage.get('/:slug',detailsNewPage)
export {routerNewpage}