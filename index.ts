import dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
const router = require("./router")
const cors = require("cors")
require("./models")


const app: Express = express();
const port = 8080;

app.use(cors())
app.use(express.json());
app.use(router)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
