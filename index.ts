import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const createApp = () => {
  const app = express();
  app.use(cors(corsOptions));

  app.use(morgan("dev"));
  app.use(express.json());
  app.use(routes);

  return app;
};

export default createApp;
