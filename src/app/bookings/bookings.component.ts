import { Component } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
//import { Bookings } from '../mock-bookings';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  constructor(private bookingService: BookingService){}

  bookings: Booking[] = [];

  ngOnInit(){
    this.bookings = this.bookingService.getBookings();
  }

  delete(booking: Booking): void {
    this.bookingService.delete(booking);
  }
}

