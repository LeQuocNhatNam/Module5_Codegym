import {Customer} from "../customer/customer";
import {Facility} from "../facility/facility";

export interface Contract {
  id?: number;
  deposit?: number;
  startDate?: string;
  endDate?: string;
  customer?: Customer;
  facility?: Facility;
}
