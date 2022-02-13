import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';




describe(' Test del componente DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [DetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear el componente DetailComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Debería rellenar apodObject.explanation', () => {
    component.apodObject.explanation = "Prueba";
    expect(component.apodObject.explanation).toBeDefined();
  });

  it('Debería rellenar apodObject.url', () => {
    component.apodObject.url = "PruebaUrl";
    expect(component.apodObject.url).toBeDefined();
  });


});
