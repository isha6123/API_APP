import mongoose from 'mongoose';

const onlineStoreSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
});

export default mongoose.model('OnlineStore', onlineStoreSchema);
