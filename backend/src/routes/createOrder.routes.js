import express from 'express';
import mercadoPagoController from '../controllers/createOrder.controller.js';

const router = express.Router();

// Ruta para crear la preferencia de pago
router.post('/create_preference', mercadoPagoController.createPreference);

export default router;