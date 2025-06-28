import mongoose from 'mongoose';

const pricingItemSchema = new mongoose.Schema({
  salePrice: Number,
  discountPrice: Number,
  taxIncluded: Boolean,
});

export default mongoose.model('PricingItem', pricingItemSchema);
