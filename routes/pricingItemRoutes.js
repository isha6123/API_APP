import express from 'express';
import { createPricingItem, getAllPricingItems } from '../controllers/pricingItemController.js';

const router = express.Router();

router.post('/', createPricingItem);
router.get('/', getAllPricingItems);

export default router;
