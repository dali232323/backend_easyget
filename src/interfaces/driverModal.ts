import mongoose, { Schema, Document } from "mongoose";

export interface IDriver extends Document {
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  address?: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  location?: {
    latitude: number;
    longitude: number;
  };
  phone?: string;
  email?: string;
  driverLicense?: {
    licenseNumber: string;
    category: string[];
    expiryDate: Date;
  };
  employmentDetails?: {
    hireDate: Date;
    status: "active" | "inactive";
    position: string;
    assignedVehicle: string;
  };
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
  };
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

const DriverSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: false },
    address: {
      street: { type: String, required: false },
      postalCode: { type: String, required: false },
      city: { type: String, required: false },
      country: { type: String, required: false },
    },
    location: {
      latitude: { type: Number, required: false },
      longitude: { type: Number, required: false },
    },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    driverLicense: {
      licenseNumber: { type: String, required: false },
      category: { type: [String], required: false },
      expiryDate: { type: Date, required: false },
    },
    employmentDetails: {
      hireDate: { type: Date, required: false },
      status: { type: String,  required: false }, //      status: { type: String, enum: ["active", "inactive"], required: false },
      position: { type: String, required: false },
      assignedVehicle: { type: String, required: false },
    },
    emergencyContact: {
      name: { type: String, required: false },
      relationship: { type: String, required: false },
      phone: { type: String, required: false },
    },
    documents: [
      {
        type: { type: String, required: false },
        documentNumber: { type: String },
        issuedDate: { type: Date },
        expiryDate: { type: Date },
      },
    ],
    notes: { type: String },
  },
  {
    timestamps: false,
  }
);

export const DriverModel = mongoose.model<IDriver>("Driver", DriverSchema);
