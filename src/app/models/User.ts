export enum Role {STAFF = "staff", STUDENT = "student", MANAGER = "manager", ADMIN = "admin"}
export enum Gender {MALE = "male", FEMALE = "female", OTHER = "other"}

export interface Address {
    city: string,
    street: string,
    postalCode: string
}

export interface User {
    id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: string,
    address: Address,
    role: Role, // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: string,
    profilePhotoUrl: string,
    gender: Gender // Generi possibili: 'male', 'female', 'other'
}