import {getProducts, updateProduct, addProduct, deleteProduct} from '../controllers/product.controller.js';
import {Router} from 'express';
import authenticateToken from '../middelwares/autenticateToken.js';

const router = Router();

router.get('/get/products',authenticateToken, getProducts);
router.post('/add/products',authenticateToken, addProduct);
router.put('/update/product/:id',authenticateToken, updateProduct);
router.delete('/delete/product/:id',authenticateToken, deleteProduct);


export default router;
