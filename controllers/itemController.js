// import Item from '../models/Item.js';

// export const createItem = async (req, res) => {
//   try {
//     const item = await Item.create(req.body);
//     res.status(201).json(item);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// export const getAllItems = async (req, res) => {
//   try {
//     const items = await Item.find().populate('category unit company stock');
//     res.status(200).json(items);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const getItemById = async (req, res) => {
//   try {
//     const item = await Item.findById(req.params.id).populate('category unit company stock');
//     if (!item) return res.status(404).json({ message: 'Item not found' });
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const updateItem = async (req, res) => {
//   try {
//     const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedItem);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// export const deleteItem = async (req, res) => {
//   try {
//     await Item.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Item deleted' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


import Item from '../models/Item.js';

// Create new item
export const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all items (with references populated)
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find().populate('category unit company stock');
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get item by ID
export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('category unit company stock');
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update item by ID
export const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete item by ID
export const deleteItem = async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
