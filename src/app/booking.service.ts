import { Injectable } from '@angular/core';
import { Bookings } from './mock-bookings';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  getBookings(): Booking[]{
    return Bookings;
  }

  getBookingById(id: number): Booking {
    const bookingById = Bookings.find((x) => x.id == id);
    return bookingById!;
  }

  updateBooking(booking: Booking): void {
    let currentBooking = this.getBookingById(booking.id);
    currentBooking = booking;
  }  

  addBooking(booking: Booking): void{
    Bookings.push(booking)
  }

  delete(booking: Booking): void {
    const index = Bookings.indexOf(booking);
    Bookings.splice(index, 1);
  }
}
