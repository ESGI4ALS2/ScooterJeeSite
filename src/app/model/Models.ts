export interface User {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    address: string;
    rate: number;
    isBanned: boolean;
    roles: Array<Role>;
}

export interface Category {
    id: number;
    name: string;
}

export interface Role {
    id: number;
    name: string;
}

export interface ScooterModel {
    id: number;
    name: string;
}
