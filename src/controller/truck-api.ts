import express, { Request, RequestHandler, Response } from "express";
import {
  getAllTrucks,
  getTruckById,
  createTruck,
  updateTruck,
  deleteTruck,
} from "../business-logik/truck";
import mongoose from "mongoose";

const router = express.Router();

// GET: Alle Trucks abrufen
router.get("/", async (req: Request, res: Response) => {
  try {
    const trucks = await getAllTrucks();
    res.json(trucks);
  } catch (error) {
    console.error("Error fetching trucks:", error);
    res.status(500).json({ message: "Error fetching trucks" });
  }
});

// POST: Einen neuen Truck hinzufügen
router.post("/", async (req: Request, res: Response) => {
  try {
    console.log("Request body:", req.body);
    const newTruck = await createTruck(req.body);
    console.log("New truck created:", newTruck);
    res.status(201).json(newTruck);
  } catch (error) {
    console.error("Error creating truck:", error);
    res.status(500).json({ message: "Error creating truck" });
  }
});

// PUT: Einen bestehenden Truck bearbeiten
const updateTruckHandler: RequestHandler<{ id: string }> = async (req, res): Promise<void> => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  try {
    const updatedTruck = await updateTruck(id, req.body);
    if (!updatedTruck) {
      res.status(404).json({ message: "Truck not found" });
      return;
    }
    res.json(updatedTruck);
  } catch (error) {
    console.error("Error updating truck:", error);
    res.status(500).json({ message: "Error updating truck" });
  }
};

// GET: Truck nach ID abrufen
const getTruckByIdHandler: RequestHandler<{ id: string }> = async (req, res): Promise<void> => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  try {
    const truck = await getTruckById(id);
    if (!truck) {
      res.status(404).json({ message: "Truck not found" });
      return;
    }
    res.json(truck);
  } catch (error) {
    console.error("Error fetching truck:", error);
    res.status(500).json({ message: "Error fetching truck" });
  }
};

// DELETE: Einen Truck löschen
const deleteTruckHandler: RequestHandler<{ id: string }> = async (req, res): Promise<void> => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  try {
    const deletedTruck = await deleteTruck(id);
    if (!deletedTruck) {
      res.status(404).json({ message: "Truck not found" });
      return;
    }
    res.json({ message: "Truck deleted successfully" });
  } catch (error) {
    console.error("Error deleting truck:", error);
    res.status(500).json({ message: "Error deleting truck" });
  }
};

// Routen registrieren
router.get("/:id", getTruckByIdHandler);
router.put("/:id", updateTruckHandler);
router.delete("/:id", deleteTruckHandler);

export default router;
