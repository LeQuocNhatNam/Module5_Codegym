import {FacilityType} from "./facility-type";
import {RentType} from "./rent-type";

export interface Facility {
  id?:number;
  name?: string;
  area?: number;
  cost?: number;
  freeFacility?: string;
  maxPeople?: number;
  numberOfFloors?: number;
  otherConvenience?: string;
  poolArea?: number;
  standardRoom?: number;
  facilityType?: FacilityType;
  rentType?: RentType;
}
