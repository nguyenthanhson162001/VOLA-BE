import express, { Request, Response } from "express";
import dotenv from "dotenv";
import "express-async-errors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import routes from "@application/routes";

// config environment
dotenv.config({
  path: `${process.cwd()}/env/${process.env.NODE_ENV || "development"}.env`,
});
import "@infrastructure/dynamoDB";
import "@infrastructure/mongoose";

const app = express();
const port = Number(process.env.PORT || 5000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/public", express.static("public"));

app.set("trust proxy", 1);

// Show routes called in console during development
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Security
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Express server started on http://localhost:${port}`);
});
