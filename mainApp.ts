import { Application, Request, Response } from "express";

export const mainApp = async (app: Application) => {
  try {
    app.use("/api");
    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({ message: "Welcome to my API", status: 200 });
      } catch (error) {
        res.status(404).json({ message: "Error", status: 404 });
      }
    });
  } catch (error) {
    return error;
  }
};
