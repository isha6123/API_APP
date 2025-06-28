// // controllers/unitController.js
// import Unit from '../models/Unit.js';

// export const createUnit = async (req, res) => {
//   try {
//     const unit = await Unit.create(req.body);
//     res.status(201).json(unit);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// export const getAllUnits = async (req, res) => {
//   try {
//     const units = await Unit.find();
//     res.json(units);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


import Unit from '../models/Unit.js';

// Create Unit
export const createUnit = async (req, res) => {
  try {
    const unit = await Unit.create(req.body);
    res.status(201).json(unit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Units
export const getAllUnits = async (req, res) => {
  try {
    const units = await Unit.find();
    res.json(units);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Unit by ID
export const getUnitById = async (req, res) => {
  try {
    const unit = await Unit.findById(req.params.id);
    if (!unit) return res.status(404).json({ error: 'Unit not found' });
    res.json(unit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Unit
export const updateUnit = async (req, res) => {
  try {
    const unit = await Unit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!unit) return res.status(404).json({ error: 'Unit not found' });
    res.json(unit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Unit
export const deleteUnit = async (req, res) => {
  try {
    const unit = await Unit.findByIdAndDelete(req.params.id);
    if (!unit) return res.status(404).json({ error: 'Unit not found' });
    res.json({ message: 'Unit deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
