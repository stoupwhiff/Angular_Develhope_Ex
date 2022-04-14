export enum Roles {staff = "staff", student = "student", manager = "manager", admin = "admin"}
export enum Genders {male = "male", female = "female", other = "other"}

export interface Address {
    city: string,
    street: string,
    postalCode: string
}

export interface Companies {
    id: number;
    name: string;
    description: string;
    location: Address;
}

export interface User {
    id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: string,
    address: Address,
    role: Roles, // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: string,
    profilePhotoUrl: string,
    companies: Companies[],
    gender: Genders // Generi possibili: 'male', 'female', 'other'
}