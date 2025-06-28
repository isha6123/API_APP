// import mongoose from 'mongoose';

// const itemSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   image: String,
//   category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
//   stock: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock' },
//   unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
//   company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   businessProfile: { type: mongoose.Schema.Types.ObjectId, ref: 'BusinessProfile' },
//   pricingItem: { type: mongoose.Schema.Types.ObjectId, ref: 'PricingItem' },
//   onlineStore: { type: mongoose.Schema.Types.ObjectId, ref: 'OnlineStore' },
// }, { timestamps: true });

// export default mongoose.model('Item', itemSchema);

import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  stock: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock' },
  unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
});

export default mongoose.model('Item', itemSchema);

