// export interface Driver {
//     _id: string;
//     firstName: string;
//     lastName: string;
//     dateOfBirth: Date;
//     address: Address;
//     location: Location;
//     phone: string;
//     email: string;
//     driverLicense: DriverLicense;
//     employmentDetails: EmploymentDetails;
//     emergencyContact: EmergencyContact;
//     documents: Document[];
//     notes?: string;
//     createdAt: Date;
//     updatedAt: Date;
//   }
  
//   export interface Address {
//     street: string;
//     postalCode: string;
//     city: string;
//     country: string;
//   }
  
//   export interface Location {
//     latitude: number;
//     longitude: number;
//   }
  
//   export interface DriverLicense {
//     licenseNumber: string;
//     category: string[];
//     expiryDate: Date;
//   }
  
//   export interface EmploymentDetails {
//     hireDate: Date;
//     status: "active" | "inactive";
//     position: string;
//     assignedVehicle: string;
//   }
  
//   export interface EmergencyContact {
//     name: string;
//     relationship: string;
//     phone: string;
//   }
  
//   export interface Document {
//     type: string;
//     documentNumber?: string;
//     issuedDate?: Date;
//     expiryDate?: Date;
//   }
  