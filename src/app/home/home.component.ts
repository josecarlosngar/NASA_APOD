import { Component, OnInit } from '@angular/core';
import { Apod } from "../models/apod";
import { ApodService } from "../services/apod.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public apodObject6DaysAgo: Apod = new Apod;
  public apodObject5DaysAgo: Apod = new Apod;
  public apodObject4DaysAgo: Apod = new Apod;
  public apodObject3DaysAgo: Apod = new Apod;
  public apodObject2DaysAgo: Apod = new Apod;
  public apodObject1DayAgo: Apod = new Apod;



  constructor(private apodApi: ApodService) {}

  ngOnInit(): void {

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    this.apodApi.getApodWithParams(year,month,day-6).subscribe((response: Apod) => {
      this.apodObject6DaysAgo = response;
    });

    this.apodApi.getApodWithParams(year,month,day-5).subscribe((response: Apod) => {
      this.apodObject5DaysAgo = response;
    });

    this.apodApi.getApodWithParams(year,month,day-4).subscribe((response: Apod) => {
      this.apodObject4DaysAgo = response;
    });

    this.apodApi.getApodWithParams(year,month,day-3).subscribe((response: Apod) => {
      this.apodObject3DaysAgo = response;
    });

    this.apodApi.getApodWithParams(year,month,day-2).subscribe((response: Apod) => {
      this.apodObject2DaysAgo = response;
    });

    this.apodApi.getApodWithParams(year,month,day-1).subscribe((response: Apod) => {
      this.apodObject1DayAgo = response;
    });
  }
}


















// export class HomeComponent implements OnInit {

//   public apodImage: Apod = new Apod;

//   constructor(private apodApi: ApodService) {}

//   ngOnInit(): void {
//     this.apodApi.getApodImage().subscribe((response: Apod) => {
//       this.apodImage = response;
//     });
//   }
// }
