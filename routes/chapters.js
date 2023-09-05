import { Router } from "express";
import read from '../controllers/chapters/read.js'
import read_pagination from "../controllers/chapters/read_pagination.js";
const chapter_router=Router()

chapter_router.get('/', read)
chapter_router.get('/chapterPag', read_pagination)
export default chapter_router