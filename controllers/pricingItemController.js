// // controllers/pricingItemController.js
// import PricingItem from '../models/PricingItem.js';

// export const createPricingItem = async (req, res) => {
//   try {
//     const item = await PricingItem.create(req.body);
//     res.status(201).json(item);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// export const getAllPricingItems = async (req, res) => {
//   try {
//     const items = await PricingItem.find();
//     res.json(items);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


import PricingItem from '../models/PricingItem.js';

// Create Pricing Item
export const createPricingItem = async (req, res) => {
  try {
    const item = await PricingItem.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Pricing Items
export const getAllPricingItems = async (req, res) => {
  try {
    const items = await PricingItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Pricing Item by ID
export const getPricingItemById = async (req, res) => {
  try {
    const item = await PricingItem.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Pricing item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Pricing Item
export const updatePricingItem = async (req, res) => {
  try {
    const updated = await PricingItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Pricing item not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Pricing Item
export const deletePricingItem = async (req, res) => {
  try {
    const deleted = await PricingItem.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Pricing item not found' });
    res.json({ message: 'Pricing item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
