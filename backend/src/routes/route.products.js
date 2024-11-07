import {getProducts, updateProduct, addProduct, deleteProduct} from '../controllers/product.controller.js';
import {Router} from 'express';

const router = Router();

router.get('/get/products', getProducts);
router.post('/add/products', addProduct);
router.put('/update/product/:id', updateProduct);
router.delete('/delete/product/:id', deleteProduct);


export default router;
