import { Router } from "express";
import read from '../controllers/chapters/read.js'
const chapter_router=Router()

chapter_router.get('/', read)

export default chapter_router