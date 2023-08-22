import { Router } from "express";
import read from '../controllers/users/read.js'

const user_router=Router()

user_router.get('/', read)

export default user_router