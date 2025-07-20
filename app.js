import express from 'express';
import allRoutes from './routes/AllRoutes.js';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/* ✅ MongoDB Connection */
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

/* this code for deployment ---- start -----*/
const root = path.join(path.resolve(), "dist");
app.use(express.static(root));
/* this code for deployment ---- end -----*/

app.use(allRoutes);

app.get(/(.*)/, (req, res) => {
  res.sendFile("index.html", { root });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("🚀 Server Running on port", port);
});
