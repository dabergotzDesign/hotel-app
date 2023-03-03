import { Injectable } from '@angular/core';
//import { Bookings } from './mock-bookings';
import { Booking } from './booking';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  bookingsURL: string = 'api/Bookings';

  getBookings(): Observable<Booking[]> {
    const response = this.httpClient.get<Booking[]>(this.bookingsURL);
    //console.log(response); // Observable
    return response;
  }

  getBookingById(id: number): Observable<Booking> {
    const response = this.httpClient.get<Booking>(this.bookingsURL + '/' + id);
    return response;
  };

  /* updateBooking(booking: Booking): void {
    let currentBooking = this.getBookingById(booking.id);
    currentBooking = booking;
  } */  

  addBooking(booking: Booking): Observable<Booking>{
    const response = this.httpClient.post<Booking>(this.bookingsURL, booking);
    return response;
  }

  delete(booking: Booking): Observable<Booking> {
    const response = this.httpClient.delete<Booking>(
      this.bookingsURL + '/' + booking.id
    );
    return response;
  }
}
