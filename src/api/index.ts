import express, { Express, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const bootstrap = async () => {
  const port = process.env.PORT || 8080;
  const app: Express = express();

  app.get("/", (req: Request, res: Response) => {
    return res.send("Hi");
  });

  app.listen(port, () => {
    console.log(`[API]: Server is running at http://localhost:${port}`);
  })
};

bootstrap();
