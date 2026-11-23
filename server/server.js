import express from "express";
import cors from "cors";
import jsonDataRouter from "./routes/jsonData.route.js";

const app = express();

app.use(express.json());

app.use(cors());

const PORT = 8000;

app.use("/api/v1/jsonData", jsonDataRouter);

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
