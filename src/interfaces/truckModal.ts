import mongoose, { Schema, Document } from "mongoose";

// Truck Interface
export interface ITruck extends Document {
  registrationNumber: string;
  make: string;
  vehicleModel: string; // Umbenannt von "model" zu "vehicleModel"
  manufactureYear: number;
  capacity?: {
    weightInTons: number;
    volumeInCubicMeters: number;
  };
  fuelType: string;
  emissionsClass?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
  status: "active" | "maintenance" | "decommissioned";
  insurance?: {
    provider: string;
    policyNumber: string;
    expiryDate: Date;
  };
  technicalDetails?: {
    mileageInKm: number;
    lastServiceDate?: Date;
    nextServiceDue?: Date;
  };
  assignedDriver?: string; // Reference to Driver's _id
  documents?: {
    type: string;
    documentNumber?: string;
    issuedDate?: Date;
    expiryDate?: Date;
  }[];
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Truck Schema
const TruckSchema: Schema = new Schema(
  {
    registrationNumber: { type: String, required: true },
    make: { type: String, required: true },
    vehicleModel: { type: String, required: true }, // Umbenannt von "model" zu "vehicleModel"
    manufactureYear: { type: Number, required: true },
    capacity: {
      weightInTons: { type: Number, required: false },
      volumeInCubicMeters: { type: Number, required: false },
    },
    fuelType: { type: String, required: true },
    emissionsClass: { type: String, required: false },
    location: {
      latitude: { type: Number, required: false },
      longitude: { type: Number, required: false },
    },
    status: {
      type: String,
      enum: ["active", "maintenance", "decommissioned"],
      required: true,
    },
    insurance: {
      provider: { type: String, required: false },
      policyNumber: { type: String, required: false },
      expiryDate: { type: Date, required: false },
    },
    technicalDetails: {
      mileageInKm: { type: Number, required: false },
      lastServiceDate: { type: Date, required: false },
      nextServiceDue: { type: Date, required: false },
    },
    assignedDriver: { type: mongoose.Schema.Types.ObjectId, ref: "Driver", required: false },
    documents: [
      {
        type: { type: String, required: false },
        documentNumber: { type: String, required: false },
        issuedDate: { type: Date, required: false },
        expiryDate: { type: Date, required: false },
      },
    ],
    notes: { type: String, required: false },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt`
  }
);

// Export Truck Model
export const TruckModel = mongoose.model<ITruck>("Truck", TruckSchema);
