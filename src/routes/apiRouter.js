import express from 'express'
import { getApiUsers } from '../controller/apiController'
const apiRouter=express.Router()
  apiRouter.get('/users', getApiUsers)
export {apiRouter}