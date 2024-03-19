import express from "express";
import morgan from "morgan";
import cors from "cors";
import materialRouter from "./routes/materials.routes.js";
import productRouter from "./routes/products.routes.js";
import clientRouter from "./routes/client.routes.js";
import orderRouter from "./routes/order.routes.js";
import inventoryRouter from "./routes/inventory.routes.js";
import balanceRouter from "./routes/balance.routes.js";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
  }));  
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", materialRouter);
app.use("/api", productRouter);
app.use("/api", clientRouter);
app.use("/api", orderRouter);
app.use("/api", inventoryRouter);
app.use("/api", balanceRouter);

export default app;
