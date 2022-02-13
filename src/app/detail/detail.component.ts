import { ActivatedRoute, Router } from '@angular/router';
import { ApodService } from './../services/apod.service';
import { Apod } from './../models/apod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public apodObject: Apod = new Apod;

  constructor(private apodApi: ApodService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // Obtiene parámetros para mostrar en el componente Detalle
    this._activatedRoute.queryParams.subscribe(params => {
      this.apodObject.explanation = params['explanation'];
      this.apodObject.url = params['url'];
      this.apodObject.media_type = params['media_type'];
    });

  }

  // Navega a página principal
  goToHome(): void {
    this._router.navigate(['']);
  }

}
