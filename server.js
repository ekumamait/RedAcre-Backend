import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import populateDB from './utils/dataLoader';

// load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable cors
app.use(cors());

//initialize DB with coordinates Data
populateDB();

// Routes
app.use('/api/v1/location', require('./routes'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server listening in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
