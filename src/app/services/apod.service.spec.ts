import { Apod } from './../models/apod';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApodService } from './apod.service';
import { AsyncSubject, of } from 'rxjs';

describe(' Test del servicio ApodService', () => {
  let service: ApodService;
  let apodService: ApodService;
  let httpClientSpy: { get: jasmine.Spy };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
    });
    service = TestBed.inject(ApodService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    apodService = new ApodService(httpClientSpy as any);
  });

  it('Debería crear el servicio ApodService', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia devolver instancia Apod (HttpClient 1 llamada)', (done: DoneFn) => {
    const apod: Apod =
      { date: new Date(), url: 'url', explanation: 'explanation', media_type: 'image', title: 'titulo' };

    httpClientSpy.get.and.returnValue(of(apod));

    apodService.getApodWithParams(2000, 3, 12).subscribe({
      next: apod => {
        expect(apod)
          .withContext('apod')
          .toEqual(apod);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});


