import { Router } from "express";
import read from '../controllers/users/read.js'
import validator from "../middlewares/validator.js";
import register from '../schemas/users/register.js'
import creator from '../controllers/users/create.js'
import SignIn from '../controllers/users/signIn.js'
import userSigIn from "../schemas/users/signIn.js";
import passwordIsOk from '../middlewares/passwordIsOK.js'
import generateToken from '../middlewares/generateToken.js'
import passport from "../middlewares/passport.js";
import signout from "../controllers/users/signOut.js";
import Hash from '../middlewares/createHash.js'
const user_router=Router()

user_router.get('/', read)
user_router.post('/register',validator(register) , Hash ,creator)
user_router.post('/SignIn',validator(userSigIn), passwordIsOk, generateToken, SignIn)
user_router.post('/LogOut', passport.authenticate('jwt', { session:false }),signout)
export default user_router