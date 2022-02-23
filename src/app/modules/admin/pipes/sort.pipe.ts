import { Pipe, PipeTransform } from '@angular/core';
import { Admin } from 'src/app/model/admin.model';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(
    items: Array<Admin>,
    sortData: {
      tab: string;
      sortType: string;
      sortBrand: string;
      vaccination: string;
    }
  ): Array<Admin> {
    let resultArray: Admin[] = [];
    switch (sortData.tab) {
      case '0':
        if (sortData.sortType === 'ASC') {
          return items.sort((a, b) => {
            let nameA = a.name;
            let nameB = b.name;
            if (nameA > nameB) {
              return 1;
            } else if (nameA < nameB) {
              return -1;
            } else {
              return 0;
            }
          });
        } else if (sortData.sortType === 'DESC') {
          return items.sort((b, a) => {
            let nameA = a.name;
            let nameB = b.name;
            if (nameA > nameB) {
              return 1;
            } else if (nameA < nameB) {
              return -1;
            } else {
              return 0;
            }
          });
        }
        break;

      case '1':
        if (sortData.sortType === 'DESC') {
          return items.sort((a, b) => {
            let nameA = new Date(a.dob);
            let nameB = new Date(b.dob);
            if (nameA > nameB) {
              return 1;
            } else if (nameA < nameB) {
              return -1;
            } else {
              return 0;
            }
          });
        } else if (sortData.sortType === 'ASC') {
          return items.sort((b, a) => {
            let nameA = new Date(a.dob);
            let nameB = new Date(b.dob);
            if (nameA > nameB) {
              return 1;
            } else if (nameA < nameB) {
              return -1;
            } else {
              return 0;
            }
          });
        }
        break;

      case '2':
        for (let item of items) {
          if (item.vaccination[0].brand === sortData.sortBrand) {
            resultArray.push(item);
          }
        }
        return resultArray;
      case '3':
        if (sortData.vaccination === '1') {
          for (let item of items) {
            if (item.vaccination.length === 1) {
              resultArray.push(item);
            }
          }
          return resultArray;
        } else if (sortData.vaccination === '2') {
          for (let item of items) {
            if (item.vaccination.length > 1) {
              resultArray.push(item);
            }
          }
          return resultArray;
        }
      default:
        return items;
    }
  }
}

// if (sortData.tab === '0' && sortData.sortType === 'ASC') {
//   return items.sort((a, b) => {
//     let nameA = a.name;
//     let nameB = b.name;
//     if (nameA > nameB) {
//       return 1;
//     } else if (nameA < nameB) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// } else if(sortData.tab === '0' && sortData.sortType === 'DESC') {

// }
