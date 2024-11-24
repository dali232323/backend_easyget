import { DriverModel } from "../interfaces/driverModal";
import { TruckModel } from "../interfaces/truckModal";


export async function getDriversAndTrucks() {
  try {
    // Fahrer abrufen
    const drivers = await DriverModel.find({}, "firstName lastName _id location").lean();
    const formattedDrivers = drivers.map((driver: any) => ({
      id: driver._id,
      name: `${driver.firstName} ${driver.lastName}`,
      type: "driver",
      coordinates: driver.location
        ? { latitude: driver.location.latitude, longitude: driver.location.longitude }
        : null,
    }));

    // Trucks abrufen
    const trucks = await TruckModel.find({}, "registrationNumber _id location").lean();
    const formattedTrucks = trucks.map((truck: any) => ({
      id: truck._id,
      name: truck.registrationNumber,
      type: "truck",
      coordinates: truck.location
        ? { latitude: truck.location.latitude, longitude: truck.location.longitude }
        : null,
    }));

    // Kombinierte Liste
    return [...formattedDrivers, ...formattedTrucks];
  } catch (error) {
    console.error("Error fetching drivers and trucks:", error);
    throw error;
  }
}
