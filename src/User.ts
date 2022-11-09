// Anytime we have a file whose primary purpose is to create and export a class, we're usually going to give it a capital name (User)

import faker from "faker";
import { Type } from "./CustomMap";

export class User implements Type {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'green';

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `User name: ${this.name}`
    }
}