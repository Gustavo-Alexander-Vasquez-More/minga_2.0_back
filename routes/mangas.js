import { Router } from "express";
import read from '../controllers/mangas/read.js'
import create from "../controllers/mangas/create.js";
import readPagination from "../controllers/mangas/readPagination.js";
const manga_router=Router()

manga_router.get('/', read)
manga_router.post('/Create', create)
manga_router.get('/pagMangas',  readPagination)

export default manga_router