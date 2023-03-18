import {Departure} from './departure';
import {Destination} from './destination';
import {BusType} from './busType';

export interface Bus {
  id?: number;
  code?: string;
  busType?: BusType;
  companyName?: string;
  departure?: Departure;
  destination?: Destination;
  phoneNumber: string;
  email: string;
  departureTime: string;
  arrivalTime: string;
}
