import { Router } from "express";
import read from '../controllers/mangas/read.js'
import create from "../controllers/mangas/create.js";
const manga_router=Router()

manga_router.get('/', read)
manga_router.post('/Create', create)

export default manga_router