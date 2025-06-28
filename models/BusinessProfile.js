import mongoose from 'mongoose';

const businessProfileSchema = new mongoose.Schema({
  businessName: String,
  address: String,
  pincode: String,
  description: String,
  state: String,
  businessType: String,
  category: String,
  signature: String,
});

export default mongoose.model('BusinessProfile', businessProfileSchema);
