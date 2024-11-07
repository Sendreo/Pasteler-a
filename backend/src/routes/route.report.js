import {  addReport,deleteReport,updateReport,allReports} from '../controllers/report.controller.js';
import {Router} from 'express';

const router = Router();

router.get('/get/report', allReports);
router.post('/add/report', addReport);
router.put('/update/report/:id', updateReport);
router.delete('/delete/report/:id', deleteReport);

export default router;
