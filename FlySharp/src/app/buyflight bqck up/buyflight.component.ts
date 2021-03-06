import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../services/flights.service';
import {Flight} from "../model/flight";


@Component({
  selector: 'app-buyflight',
  templateUrl: './buyflight.component.html',
  styleUrls: ['./buyflight.component.css']
})
export class BuyflightComponent implements OnInit {

  //flights = FLIGHTS;  
     
    flights : Flight[];
    constructor(private flightsService : FlightsService ){}

    public getFlights() : Flight[]{
      return FLIGHTS;
    }

    ngOnInit() {
      this.flights =   this.flightsService.getFlights();
    }

}


var FLIGHTS = [
  {"id": 11, "flightNumber" : "FS1298", "origin": "LAX", "destination" : "LHR", "departDay" : "Monday",
  departTime : "09:00", "arriveDay" : "Monday", arriveTime : "09:00", "price" : 99.99},
  {"id": 12, "flightNumber" : "FS1201", "origin": "LAX", "destination" : "LHR", "departDay" : "Tuesday",
  departTime : "09:00", "arriveDay" : "Monday", arriveTime : "09:00", "price" : 99.99},
  {"id": 13, "flightNumber" : "FS1211", "origin": "LHR", "destination" : "ARN", "departDay" : "Wednesday",
  departTime : "09:00", "arriveDay" : "Monday", arriveTime : "09:00", "price" : 99.99},
];
