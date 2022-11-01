import { Geo } from "./Geo";


export interface Address {
    street?: String;
    suite?: String;
    city?: String;
    zipcode?: String;
    geo: Geo;

}