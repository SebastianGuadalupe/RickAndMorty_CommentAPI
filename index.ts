import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';
const router = require("./router")
const cors = require("cors")
require("./models")


const app: Express = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(router)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
