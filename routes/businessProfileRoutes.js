import express from 'express';
import { createBusinessProfile, getAllBusinessProfiles } from '../controllers/businessProfileController.js';

const router = express.Router();

router.post('/', createBusinessProfile);
router.get('/', getAllBusinessProfiles);

export default router;
