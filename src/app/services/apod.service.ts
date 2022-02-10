import { Apod } from './../models/apod';
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, take } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private apiKey = environment.API_KEY;

  constructor(private http: HttpClient) {}

  public getApodImage(): Observable<Apod> {

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    this.apiKey = environment.API_KEY;

    const apodUrl = `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=${this.apiKey}`;

    return this.http.get<Apod>(apodUrl).pipe(
      catchError((err: any) => {
        return throwError(() => err);
      })
    );
  }
}
