import {getSales,addSales,updateSale,deleteSale} from '../controllers/sales.controller.js';
import {Router} from 'express';

const router = Router();

router.get('/get/sales', getSales);
router.post('/add/sales', addSales);
router.put('/update/sale/:id', updateSale);
router.delete('/delete/sale/:id', deleteSale);

export default router;