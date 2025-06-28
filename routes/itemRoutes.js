// const express = require('express');
// const {
//   createItem,
//   getAllItems,
//   getItemById,
//   updateItem,
//   deleteItem
// } = require('../controllers/itemController');

// const router = express.Router();

// router.post('/', createItem);
// router.get('/', getAllItems);
// router.get('/:id', getItemById);
// router.put('/:id', updateItem);
// router.delete('/:id', deleteItem);

// module.exports = router;

import express from 'express';
import {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem
} from '../controllers/itemController.js';

const router = express.Router();

router.post('/', createItem);
router.get('/', getAllItems);
router.get('/:id', getItemById);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;

