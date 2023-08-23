import { Router } from "express";
import read from '../controllers/users/read.js'
import validator from "../middlewares/validator.js";
import register from '../schemas/users/register.js'
import creator from '../controllers/users/create.js'
const user_router=Router()

user_router.get('/', read)
user_router.post('/register',validator(register) ,creator)
export default user_router