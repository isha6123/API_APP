// // const express = require('express');
// // const dotenv = require('dotenv');
// // const connectDB = require('./config/db');

// // // ROUTES
// // // const itemRoutes = require('./routes/itemRoutes');
// // const itemRoutes = require('./routes/itemRoutes');
// // const categoryRoutes = require('./routes/categoryRoutes');
// // const stockRoutes = require('./routes/stockRoutes');
// // const unitRoutes = require('./routes/unitRoutes');
// // const companyRoutes = require('./routes/companyRoutes');
// // const userRoutes = require('./routes/userRoutes');
// // const businessProfileRoutes = require('./routes/businessProfileRoutes');
// // const pricingItemRoutes = require('./routes/pricingItemRoutes');
// // const onlineStoreRoutes = require('./routes/onlineStoreRoutes');

// // dotenv.config();
// // connectDB();

// // const app = express();
// // app.use(express.json());

// // // app.use('/api/items', itemRoutes);
// // app.use('/api/items', itemRoutes);
// // app.use('/api/categories', categoryRoutes);
// // app.use('/api/stocks', stockRoutes);
// // app.use('/api/units', unitRoutes);
// // app.use('/api/companies', companyRoutes);
// // app.use('/api/users', userRoutes);
// // app.use('/api/business-profiles', businessProfileRoutes);
// // app.use('/api/pricing-items', pricingItemRoutes);
// // app.use('/api/online-stores', onlineStoreRoutes);

// // app.get('/', (req, res) => res.send('API is running...'));

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';

// // Routes
// import itemRoutes from './routes/itemRoutes.js';
// import categoryRoutes from './routes/categoryRoutes.js';
// import stockRoutes from './routes/stockRoutes.js';
// import unitRoutes from './routes/unitRoutes.js';
// import companyRoutes from './routes/companyRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import businessProfileRoutes from './routes/businessProfileRoutes.js';
// import pricingItemRoutes from './routes/pricingItemRoutes.js';
// import onlineStoreRoutes from './routes/onlineStoreRoutes.js';

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());

// // Route Middlewares
// app.use('/api/items', itemRoutes);
// app.use('/api/categories', categoryRoutes);
// app.use('/api/stocks', stockRoutes);
// app.use('/api/units', unitRoutes);
// app.use('/api/companies', companyRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/business-profiles', businessProfileRoutes);
// app.use('/api/pricing-items', pricingItemRoutes);
// app.use('/api/online-stores', onlineStoreRoutes);

// app.get('/', (req, res) => res.send('API is running...'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));








// import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';

// import itemRoutes from './routes/itemRoutes.js';
// import unitRoutes from './routes/unitRoutes.js';
// import companyRoutes from './routes/companyRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import businessProfileRoutes from './routes/businessProfileRoutes.js';
// import pricingItemRoutes from './routes/pricingItemRoutes.js';
// import stockRoutes from './routes/stockRoutes.js';
// import onlineStoreRoutes from './routes/onlineStoreRoutes.js';
// import categoryRoutes from './routes/categoryRoutes.js';

// dotenv.config();

// const app = express();
// app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB Connected'))
//   .catch(err => console.error(err));

// app.use('/api/items', itemRoutes);
// app.use('/api/units', unitRoutes);
// app.use('/api/companies', companyRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/business-profile', businessProfileRoutes);
// app.use('/api/pricing-items', pricingItemRoutes);
// app.use('/api/stocks', stockRoutes);
// app.use('/api/online-store', onlineStoreRoutes);
// app.use('/api/categories', categoryRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// server.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import itemRoutes from './routes/itemRoutes.js';
import unitRoutes from './routes/unitRoutes.js';
import stockRoutes from './routes/stockRoutes.js';
import companyRoutes from './routes/companyRoutes.js';
import userRoutes from './routes/userRoutes.js';
import businessProfileRoutes from './routes/businessProfileRoutes.js';
import pricingItemRoutes from './routes/pricingItemRoutes.js';
import onlineStoreRoutes from './routes/onlineStoreRoutes.js';

import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// API Routes
app.use('/api/items', itemRoutes);
app.use('/api/units', unitRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/users', userRoutes);
app.use('/api/business-profiles', businessProfileRoutes);
app.use('/api/pricing-items', pricingItemRoutes);
app.use('/api/online-stores', onlineStoreRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
