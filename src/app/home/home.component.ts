import { Component, OnInit } from '@angular/core';
import { Apod } from "../models/apod";
import { ApodService } from "../services/apod.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public apodImage: Apod = new Apod;

  constructor(private apodApi: ApodService) {}

  ngOnInit(): void {
    this.apodApi.getApodImage().subscribe((response: Apod) => {
      this.apodImage = response;
    });
  }
}
