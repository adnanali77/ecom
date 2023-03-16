import express from 'express';
import { userSignUp, userLogIn } from '../Controller/user-controller.js';
import { getProductById, getProducts } from '../Controller/product-controller.js';

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/', getProducts);
router.get('/product/:id', getProductById);

export default router;