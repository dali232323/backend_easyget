import { TruckModel } from "../interfaces/truckModal";

// Alle Trucks abrufen
export async function getAllTrucks() {
  try {
    // Nur bestimmte Felder zurückgeben
    const trucks = await TruckModel.find({}, "registrationNumber make vehicleModel status");
    return trucks;
  } catch (error) {
    console.error("Error fetching trucks:", error);
    throw error;
  }
}

// Truck nach ID abrufen
export async function getTruckById(id: string) {
  try {
   
    const truck = await TruckModel.findOne({ _id: id });
    return truck;
  } catch (error) {
    console.error("Error fetching truck by ID:", error);
    throw error;
  }
}

// Truck erstellen
export async function createTruck(truckData: any) {
  try {
    const newTruck = new TruckModel(truckData);
    const savedTruck = await newTruck.save();
    return savedTruck;
  } catch (error) {
    console.error("Error creating truck:", error);
    throw error;
  }
}

// Truck aktualisieren
export async function updateTruck(id: string, updateData: any) {
  try {
    const updatedTruck = await TruckModel.findByIdAndUpdate(id, updateData, {
      new: true, // Gibt das aktualisierte Dokument zurück
      runValidators: true, // Überprüft die Validierung
    });
    return updatedTruck;
  } catch (error) {
    console.error("Error updating truck:", error);
    throw error;
  }
}

// Truck löschen
export async function deleteTruck(id: string) {
  try {
    const deletedTruck = await TruckModel.findByIdAndDelete(id);
    return deletedTruck;
  } catch (error) {
    console.error("Error deleting truck:", error);
    throw error;
  }
}
