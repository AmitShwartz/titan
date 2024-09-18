import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Application, Request } from "express";
import envConfig from "./config/envConfig";
import { ErrorHandler } from "./middlewares/ErrorHandler";
import router from "./routes";
import healthCheckRouter from "./routes/healthCheck.route";
import { NotFoundError } from "./utils/ApiError";
import { initDatabase } from "./utils/database";
import { bindSwagger } from "./utils/swagger";

dotenv.config();
const app: Application = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

bindSwagger(app);

app.use("/health", healthCheckRouter);
app.use("/api", router);

app.use((req: Request) => {
  throw new NotFoundError(req.path);
});

app.use(ErrorHandler.handle);

const PORT = envConfig.serverPort || 3000;

export const startServer = async () => {
  try {
    await initDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Error occurred: ${error}`);
  }
};
