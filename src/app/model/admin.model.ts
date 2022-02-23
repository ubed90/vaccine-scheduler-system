import { Vaccine } from './vaccine.model';

export interface Admin {
  id: string;
  name: string;
  email: string;
  dob: string;
  vaccination: Vaccine[];
}
