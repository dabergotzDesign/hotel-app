import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-eventsignup',
  templateUrl: './eventsignup.component.html',
  styleUrls: ['./eventsignup.component.css']
})
export class EventsignupComponent {
constructor(private router: Router){}

signUpMail: string = "";

  get inputEmail(){
    return this.signUpMail;
  }

  onSubmit(){
    console.log("send!");
    this.router.navigate(["bookings"]);
  }
}
