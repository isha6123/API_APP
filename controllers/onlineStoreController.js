// import OnlineStore from '../models/OnlineStore.js';

// export const createOnlineStore = async (req, res) => {
//   try {
//     const store = await OnlineStore.create(req.body);
//     res.status(201).json(store);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// export const getAllOnlineStores = async (req, res) => {
//   try {
//     const stores = await OnlineStore.find();
//     res.json(stores);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


import OnlineStore from '../models/OnlineStore.js';

// Create Online Store
export const createOnlineStore = async (req, res) => {
  try {
    const store = await OnlineStore.create(req.body);
    res.status(201).json(store);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Online Stores
export const getAllOnlineStores = async (req, res) => {
  try {
    const stores = await OnlineStore.find();
    res.json(stores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Online Store by ID
export const getOnlineStoreById = async (req, res) => {
  try {
    const store = await OnlineStore.findById(req.params.id);
    if (!store) return res.status(404).json({ error: 'Online store not found' });
    res.json(store);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Online Store
export const updateOnlineStore = async (req, res) => {
  try {
    const store = await OnlineStore.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!store) return res.status(404).json({ error: 'Online store not found' });
    res.json(store);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Online Store
export const deleteOnlineStore = async (req, res) => {
  try {
    const store = await OnlineStore.findByIdAndDelete(req.params.id);
    if (!store) return res.status(404).json({ error: 'Online store not found' });
    res.json({ message: 'Online store deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
