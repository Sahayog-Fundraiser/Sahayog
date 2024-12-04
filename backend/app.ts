require("dotenv").config();
import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import morgan from "morgan";
import userRouter from "./routes/users";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware";
import cookieParser from "cookie-parser";

const app: Application = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser())

app.use("/api/v1/users", userRouter);

app.get("/api/v1/ping", (req, res) => {
  return res.status(200).json({
    message: "Ping Pong",
  });
});

app.use(errorHandlerMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
