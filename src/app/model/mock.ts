import { Patient } from './patient.model';
import { v4 } from 'uuid';
import { Admin } from './admin.model';

export const patients_data: Patient[] = [
  {
    id: v4(),
    name: 'Ubed',
    email: 'shaikhobaid123@gmail.com',
    dob: '1999-09-19',
    gender: 'male',
    pob: 'Mumbai',
    bloodGroup: 'A+',
    height: '175',
    weight: '75',
  },
  {
    id: v4(),
    name: 'Yashwant',
    email: 'yashwant@gmail.com',
    dob: '1996-12-12',
    gender: 'male',
    pob: 'Bangalore',
    bloodGroup: 'B+',
    height: '160',
    weight: '80',
  },
  {
    id: v4(),
    name: 'Prathamesh',
    email: 'prathamesh@gmail.com',
    dob: '1996-07-12',
    gender: 'male',
    pob: 'Pune',
    bloodGroup: 'AB+',
    height: '165',
    weight: '75',
  },
  {
    id: v4(),
    name: 'Sneha',
    email: 'sneha@gmail.com',
    dob: '1999-01-29',
    gender: 'female',
    pob: 'Amravati',
    bloodGroup: 'B+',
    height: '155',
    weight: '49',
  },
];

export const admin_data: Admin[] = [
  {
    id: 'a23b1863-47d6-4880-a84e-7c382571ad6d',
    name: 'Ubed Shaikh',
    email: 'shaikhobaid123@gmail.com',
    dob: '1999-09-19',
    vaccination: [
      {
        dose: '1',
        doa: '2022-02-01',
        brand: 'covishield',
        givenat: 'Mumbai Hospital',
      },
      {
        dose: '2',
        doa: '2022-02-10',
        brand: 'covishield',
        givenat: 'Mumbai Hospital',
      },
    ],
  },
  {
    id: 'a23b1863-47d6-4880-a84e-7c382571se5t',
    name: 'Yashwant Naik',
    email: 'yashwant@gmail.com',
    dob: '1998-08-25',
    vaccination: [
      {
        dose: '1',
        doa: '2022-02-05',
        brand: 'covaxin',
        givenat: 'Bangalore Hospital',
      },
    ],
  },
  {
    id: 'a23b1863-47d6-4880-a84e-7c382571qw1y',
    name: 'Prathamesh Waikar',
    email: 'prathamesh@gmail.com',
    dob: '1999-03-15',
    vaccination: [
      {
        dose: '1',
        doa: '2022-02-05',
        brand: 'sputnik',
        givenat: 'Pune Hospital',
      },
    ],
  },
];
