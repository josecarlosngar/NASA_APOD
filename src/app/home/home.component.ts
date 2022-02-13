import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private apodApi: ApodService, private _router: Router) { }

  ngOnInit(): void {

    var fecha = new Date();

    var date6DaysAgo = new Date(fecha.getTime() - 24 * 60 * 60 * 1000 * 26);
    var date5DaysAgo = new Date(fecha.getTime() - 24 * 60 * 60 * 1000 * 25);
    var date4DaysAgo = new Date(fecha.getTime() - 24 * 60 * 60 * 1000 * 24);
    var date3DaysAgo = new Date(fecha.getTime() - 24 * 60 * 60 * 1000 * 23);
    var date2DaysAgo = new Date(fecha.getTime() - 24 * 60 * 60 * 1000 * 22);
    var dateADayAgo = new Date(fecha.getTime() - 24 * 60 * 60 * 1000);

    this.apodApi.getApodWithParams(date6DaysAgo.getFullYear(), date6DaysAgo.getMonth() + 1, date6DaysAgo.getDate()).subscribe((response: Apod) => {
      this.apodObject6DaysAgo = response;
    });

    this.apodApi.getApodWithParams(date5DaysAgo.getFullYear(), date5DaysAgo.getMonth() + 1, date5DaysAgo.getDate()).subscribe((response: Apod) => {
      this.apodObject5DaysAgo = response;
    });

    this.apodApi.getApodWithParams(date4DaysAgo.getFullYear(), date4DaysAgo.getMonth() + 1, date4DaysAgo.getDate()).subscribe((response: Apod) => {
      this.apodObject4DaysAgo = response;
    });

    this.apodApi.getApodWithParams(date3DaysAgo.getFullYear(), date3DaysAgo.getMonth() + 1, date3DaysAgo.getDate()).subscribe((response: Apod) => {
      this.apodObject3DaysAgo = response;
    });

    this.apodApi.getApodWithParams(date2DaysAgo.getFullYear(), date2DaysAgo.getMonth() + 1, date2DaysAgo.getDate()).subscribe((response: Apod) => {
      this.apodObject2DaysAgo = response;
    });

    this.apodApi.getApodWithParams(dateADayAgo.getFullYear(), dateADayAgo.getMonth() + 1, dateADayAgo.getDate()).subscribe((response: Apod) => {
      this.apodObject1DayAgo = response;
    });
  }


  goToDetail(apodObject: Apod): void {
    this._router.navigate(['detail'], { queryParams: { url: apodObject.url, explanation: apodObject.explanation, media_type: apodObject.media_type }, skipLocationChange: true });
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
