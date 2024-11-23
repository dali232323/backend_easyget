import { DriverModel } from "../interfaces/driverModal";


export async function getAllDrivers() {
  try {
    // Nur bestimmte Felder zurückgeben
    const drivers = await DriverModel.find({}, "firstName lastName phone email");
    return drivers;
  } catch (error) {
    console.error("Error fetching drivers:", error);
    throw error;
  }
}


export async function getDriverById(id: string) {
  try {
    const driver = await DriverModel.findById(id);
    return driver;
  } catch (error) {
    console.error("Error fetching driver by ID:", error);
    throw error;
  }
}



export async function createDriver(driverData: any) {
  try {
    const newDriver = new DriverModel(driverData);
    
    const savedDriver = await newDriver.save();
    return savedDriver;
  } catch (error) {
    console.error("ErrorDB creating driver:", error);
    throw error;
  }
}

// Methode zum Aktualisieren eines bestehenden Fahrers
export async function updateDriver(id: string, updateData: any) {
  try {
    const updatedDriver = await DriverModel.findByIdAndUpdate(id, updateData, {
      new: true, // Gibt das aktualisierte Dokument zurück
      runValidators: true, // Überprüft die Validierung
    });
    return updatedDriver;
  } catch (error) {
    console.error("Error updating driver:", error);
    throw error;
  }
}

