import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import connectDB from "./database/db.js";
import defaultData from "./default.js";
import router from "./routes/route.js";

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 8000;


//middlewares
app.use(express.json());
app.use(cors());
app.use('/', router);
app.use('/', (req, res) => {
  res.send('server is ready');
});

defaultData();

app.listen(PORT, () => {
  console.log(`Server is running successfully at port no. ${PORT}`);
}); 