import express from "express";
import { getDriversAndTrucks } from "../business-logik/driverTruckMapItems";


const router = express.Router();

router.get("/map-data", async (req, res) => {
  try {
    const data = await getDriversAndTrucks();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching map data" });
  }
});

export default router;