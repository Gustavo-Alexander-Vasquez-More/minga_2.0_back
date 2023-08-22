import express from 'express'
import user_router from './users.js';
import manga_router from './mangas.js';
import chapter_router from './chapters.js';
import category_router from './categories.js';
import auth_router from './authors.js';
let router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', user_router)
router.use('/mangas',manga_router)
router.use('/chapters', chapter_router)
router.use('/categories', category_router)
router.use('/authors', auth_router)
export default router;