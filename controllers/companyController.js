// // controllers/companyController.js
// import Company from '../models/Company.js';

// export const createCompany = async (req, res) => {
//   try {
//     const company = await Company.create(req.body);
//     res.status(201).json(company);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// export const getAllCompanies = async (req, res) => {
//   try {
//     const companies = await Company.find();
//     res.json(companies);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


import Company from '../models/Company.js';

// Create Company
export const createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Companies
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Company by ID
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Company
export const updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Company
export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json({ message: 'Company deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
