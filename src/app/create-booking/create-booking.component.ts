import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
//import { Bookings } from '../mock-bookings';


@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bookingService: BookingService ) {}

  booking: Booking = {
    id: 0,
    name: 'Guest Name',
    roomNumber: 0,
    startDate: new Date(),
    endDate: new Date()
  };

  ngOnInit(): void {
    if (this.router.url != '/create'){
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      const bookingById = this.bookingService.getBookingById(this.booking.id);
      this.booking = bookingById;
    }
  }

  dateChanged(event: Event, isStart: boolean){
    const val = (event.target as HTMLInputElement).value;
    if(isStart){
      this.booking.startDate = new Date(val);
    }else{
      this.booking.endDate = new Date(val);
    }
  }

  save(): void {
    let bookingById = this.bookingService.getBookingById(this.booking.id);
    if(bookingById == null || bookingById == undefined){
      this.bookingService.addBooking(this.booking);    
    }else{
      this.bookingService.updateBooking(this.booking);
    }
    this.router.navigate(['bookings']);
  }
}

