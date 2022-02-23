import { Admin } from 'src/app/model/admin.model';
import { admin_data } from 'src/app/model/mock';
import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {
  let Pipe: SortPipe;
  let mockData: Array<Admin>;
  let sortData: {
    tab: string;
    sortType: string;
    sortBrand: string;
    vaccination: string;
  };

  beforeEach(() => {
    Pipe = new SortPipe();
    mockData = admin_data;
  });

  afterEach(() => {
    Pipe = undefined;
    sortData = {
      tab: '',
      sortType: '',
      sortBrand: '',
      vaccination: '',
    };
    mockData = undefined;
  });

  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });

  it('return Whole Registered Patients Array By Default', () => {
    sortData = {
      tab: '',
      sortType: '',
      sortBrand: '',
      vaccination: '',
    };
    let data: Array<Admin> = Pipe.transform(mockData, sortData);

    // data = Pipe.transform(mockData, sortData);
    // console.log(data);
    expect(data).toEqual(Pipe.transform(mockData, sortData));
    expect(data.length).toBe(3);
  });

  it('return a Sorted Array in Ascending order Based On Name', () => {
    sortData = {
      tab: '0',
      sortType: 'ASC',
      sortBrand: '',
      vaccination: '',
    };
    let data: Array<Admin> = Pipe.transform(mockData, sortData);

    // data = Pipe.transform(mockData, sortData);
    // console.log(data);
    expect(data).toEqual(Pipe.transform(mockData, sortData));
  });

  it('return a Sorted Array in Descending order Based On Name', () => {
    sortData = {
      tab: '0',
      sortType: 'DESC',
      sortBrand: '',
      vaccination: '',
    };
    let data: Array<Admin> = Pipe.transform(mockData, sortData);

    // data = Pipe.transform(mockData, sortData);
    // console.log(data);
    expect(data).toEqual(Pipe.transform(mockData, sortData));
  });

  it('return a Sorted Array in Ascending order Based On DOB', () => {
    sortData = {
      tab: '1',
      sortType: 'ASC',
      sortBrand: '',
      vaccination: '',
    };
    let data: Array<Admin> = Pipe.transform(mockData, sortData);

    // data = Pipe.transform(mockData, sortData);
    // console.log(data);
    expect(data).toEqual(Pipe.transform(mockData, sortData));
  });

  it('return a Sorted Array in Descending order Based On DOB', () => {
    sortData = {
      tab: '1',
      sortType: 'DESC',
      sortBrand: '',
      vaccination: '',
    };
    let data: Array<Admin> = Pipe.transform(mockData, sortData);

    // data = Pipe.transform(mockData, sortData);
    // console.log(data);
    expect(data).toEqual(Pipe.transform(mockData, sortData));
  });

  it('return an Array Containing Vaccinations of Brand Covaxin Only', () => {
    sortData = {
      tab: '2',
      sortType: '',
      sortBrand: 'covaxin',
      vaccination: '',
    };
    let data: Array<Admin> = Pipe.transform(mockData, sortData);

    // data = Pipe.transform(mockData, sortData);
    // console.log(data);
    expect(data).toEqual(Pipe.transform(mockData, sortData));
    expect(data.length).toBe(1);
  });

  it('return an Array Containing Vaccinations of Brand CoviShield Only', () => {
    sortData = {
      tab: '2',
      sortType: '',
      sortBrand: 'covishield',
      vaccination: '',
    };
    let data: Array<Admin> = Pipe.transform(mockData, sortData);

    // data = Pipe.transform(mockData, sortData);
    // console.log(data);
    expect(data).toEqual(Pipe.transform(mockData, sortData));
    expect(data.length).toBe(1);
  });

  it('return an Array Containing Vaccinations of Brand Sputnik Only', () => {
    sortData = {
      tab: '2',
      sortType: '',
      sortBrand: 'sputnik',
      vaccination: '',
    };
    let data: Array<Admin> = Pipe.transform(mockData, sortData);

    // data = Pipe.transform(mockData, sortData);
    // console.log(data);
    expect(data).toEqual(Pipe.transform(mockData, sortData));
    expect(data.length).toBe(1);
  });

  it('return an Array Containing Vaccinations with First Dose Only', () => {
    sortData = {
      tab: '3',
      sortType: '',
      sortBrand: '',
      vaccination: '1',
    };
    let data: Array<Admin> = Pipe.transform(mockData, sortData);

    // data = Pipe.transform(mockData, sortData);
    // console.log(data);
    expect(data).toEqual(Pipe.transform(mockData, sortData));
    expect(data.length).toBe(2);
  });

  it('return an Array Containing Fully Vaccinated Patients', () => {
    sortData = {
      tab: '3',
      sortType: '',
      sortBrand: '',
      vaccination: '2',
    };
    let data: Array<Admin> = Pipe.transform(mockData, sortData);

    // data = Pipe.transform(mockData, sortData);
    // console.log(data);
    expect(data).toEqual(Pipe.transform(mockData, sortData));
    expect(data.length).toBe(1);
  });
});
