import { Injectable } from '@angular/core';
import { Booking } from './booking';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb(){
    const Bookings: Booking[]=[{
      id: 1,
      name: 'Max Muster',
      roomNumber: 14,
      startDate: new Date('2023-02-21'),
      endDate: new Date('2023-02-28'),
  },{
      id: 2,
      name: 'Maria Musterfrau',
      roomNumber: 25,
      startDate: new Date('2023-02-18'),
      endDate: new Date('2023-02-24')
  },{
      id: 3,
      name: 'John Doe',
      roomNumber: 116,
      startDate: new Date('2023-03-02'),
      endDate: new Date('2023-03-14')
  }];

  return {Bookings};
  }

  constructor() { }

}
