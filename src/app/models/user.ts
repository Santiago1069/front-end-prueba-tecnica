import { Address } from "./Address";
import { Company } from "./Company";

export interface User {
    id?: String;
    name?: String;
    username?: String
    email?: String;
    phone?: String;
    website?: String;
    address: Address;
    company: Company;
    gravatar?: String  
};