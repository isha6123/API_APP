// import Stock from '../models/Stock.js';

// export const createStock = async (req, res) => {
//   try {
//     const stock = await Stock.create(req.body);
//     res.status(201).json(stock);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// export const getAllStocks = async (req, res) => {
//   try {
//     const stocks = await Stock.find();
//     res.json(stocks);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


import Stock from '../models/Stock.js';

// Create Stock
export const createStock = async (req, res) => {
  try {
    const stock = await Stock.create(req.body);
    res.status(201).json(stock);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Stocks
export const getAllStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Stock by ID
export const getStockById = async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);
    if (!stock) return res.status(404).json({ error: 'Stock not found' });
    res.json(stock);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Stock
export const updateStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!stock) return res.status(404).json({ error: 'Stock not found' });
    res.json(stock);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Stock
export const deleteStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndDelete(req.params.id);
    if (!stock) return res.status(404).json({ error: 'Stock not found' });
    res.json({ message: 'Stock deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
