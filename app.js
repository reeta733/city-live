// chaurasiyareeta81
// 8MW433uovcyKoWga

// mongodb+srv://chaurasiyareeta81:<db_password>@cluster0.dczolwm.mongodb.net

import express from 'express';
import allRoutes from './routes/AllRoutes.js';
import cors from 'cors';

import path from 'path';

const app = express(); 

// This code for deployment ---start---
const root = path.join(path.resolve(), 'dist');
app.use(express.static(root));
// This code for deployment ---end---

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.resolve() + "/assets"));

app.use(allRoutes);


// app.get("*", (req, res) => {
//   res.sendFile("index.html", { root: path.join(path.resolve(), 'dist') }  );
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server Running on port", port);
});