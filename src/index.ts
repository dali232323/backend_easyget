import express, { Request, Response } from "express";
import { connectToDatabase } from "./data-access/mongoose";
import driverRouter from "./controller/driver-api";

const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware für JSON-Verarbeitung
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// Routen registrieren
app.use("/driver", driverRouter);

// Beispielroute
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

// Verbindung zur Datenbank herstellen und Server starten
connectToDatabase()
  .then(() => {
    //console.log("Database connection established.");
    app.listen(PORT, () => {
      //console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });




