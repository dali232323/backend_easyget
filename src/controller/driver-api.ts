import express, { Request, RequestHandler,Response } from "express";
import { getAllDrivers, getDriverById, createDriver, updateDriver } from "../business-logik/driver";
import mongoose from "mongoose";

const router = express.Router();

// GET: Alle Fahrer abrufen
router.get("/", async (req: Request, res: Response) => {
  try {
    const drivers = await getAllDrivers();
    res.json(drivers);
  } catch (error) {
    console.error("Error fetching drivers:", error);
    res.status(500).json({ message: "Error fetching drivers" });
  }
});



// POST: Einen neuen Fahrer hinzufügen
router.post("/", async (req: Request, res: Response) => {
  try {
    console.log("my body", req.body)
    const newDriver = await createDriver(req.body);
    console.log(newDriver)
    res.status(201).json({});
  } catch (error) {
    console.error("Error creating driver:", error);
    res.status(500).json({ message: "ErrorAPI creating driver" });
  }
});




// PUT: Einen bestehenden Fahrer bearbeiten
const updateDriverHandler: RequestHandler<{ id: string }> = async (req, res): Promise<void> => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  try {
    const updatedDriver = await updateDriver(id, req.body);
    if (!updatedDriver) {
      res.status(404).json({ message: "Driver not found" });
      return;
    }
    res.json(updatedDriver);
  } catch (error) {
    console.error("Error updating driver:", error);
    res.status(500).json({ message: "Error updating driver" });
  }
};






const getDriverByIdHandler: RequestHandler<{ id: string }> = async (req, res): Promise<void> => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  try {
    const driver = await getDriverById(id);
    if (!driver) {
      res.status(404).json({ message: "Driver not found" });
      return;
    }
    res.json(driver);
  } catch (error) {
    console.error("Error fetching driver:", error);
    res.status(500).json({ message: "Error fetching driver" });
  }
};

router.put("/:id", updateDriverHandler);
router.get("/:id", getDriverByIdHandler);
export default router;
