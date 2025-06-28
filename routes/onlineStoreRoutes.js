import express from 'express';
import { createOnlineStore, getAllOnlineStores } from '../controllers/onlineStoreController.js';

const router = express.Router();

router.post('/', createOnlineStore);
router.get('/', getAllOnlineStores);

export default router;
