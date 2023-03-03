import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { Booking } from '../booking';
import { BookingService } from '../booking.service';
//import { Bookings } from '../mock-bookings';


@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private bookingService: BookingService,
              private formbuilder: FormBuilder ) {}

  booking: Booking = {
    id: 0,
    name: 'Guest Name',
    roomNumber: 0,
    startDate: new Date(),
    endDate: new Date()
  };

  bookingForm = this.formbuilder.group({
    id: [0, Validators.required],
    name: ['',
    Validators.compose([Validators.required, Validators.minLength(3)])],
    roomNumber: [0, Validators.required],
    startDate: [new Date(), Validators.required],
    endDate: [new Date(), Validators.required]
  });

  ngOnInit(): void {
    if (this.router.url != '/create'){
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      const bookingById = this.bookingService.getBookingById(id).subscribe((result) => {
        this.booking = result;
      });      
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
    this.booking.id = Number(this.bookingForm.get('id')?.value!);
    this.booking.name = this.bookingForm.get('name')?.value!;
    this.booking.roomNumber = Number(this.bookingForm.get('roomNumber')?.value!);
    this.booking.startDate = new Date(this.bookingForm.get('startDate')?.value!);
    this.booking.endDate = new Date(this.bookingForm.get('endDate')?.value!);

    this.bookingService.addBooking(this.booking).subscribe();
    this.router.navigate(["bookings"]);
  }


}

