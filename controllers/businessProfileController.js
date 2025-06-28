// import BusinessProfile from '../models/BusinessProfile.js';

// export const createBusinessProfile = async (req, res) => {
//   try {
//     const profile = await BusinessProfile.create(req.body);
//     res.status(201).json(profile);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// export const getAllBusinessProfiles = async (req, res) => {
//   try {
//     const profiles = await BusinessProfile.find();
//     res.json(profiles);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


import BusinessProfile from '../models/BusinessProfile.js';

// Create Business Profile
export const createBusinessProfile = async (req, res) => {
  try {
    const profile = await BusinessProfile.create(req.body);
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Business Profiles
export const getAllBusinessProfiles = async (req, res) => {
  try {
    const profiles = await BusinessProfile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Business Profile by ID
export const getBusinessProfileById = async (req, res) => {
  try {
    const profile = await BusinessProfile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Business Profile
export const updateBusinessProfile = async (req, res) => {
  try {
    const updated = await BusinessProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Profile not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Business Profile
export const deleteBusinessProfile = async (req, res) => {
  try {
    const deleted = await BusinessProfile.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Profile not found' });
    res.json({ message: 'Profile deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
