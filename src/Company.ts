import faker from 'faker';
import { Type } from './CustomMap';

// implement Type is not required
// function is to tell us that if we fail to properly implement an interface, typescript can point us to the true source of the error
export class Company implements Type {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'orange';

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }

    // name should same with the interface
    markerContent(): string {
        return `
        <div>
            <h1>Company name: ${this.companyName}</h1>
            <h3>Catch phrase: ${this.catchPhrase}</h3>
        </div>
        `
    }
}