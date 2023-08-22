import { Router } from "express";
import read from '../controllers/mangas/read.js'

const manga_router=Router()

manga_router.get('/', read)

export default manga_router