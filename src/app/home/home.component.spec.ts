import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe(' Test del componente HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear el componente HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Boton detalle pulsado, variable apodObject6DaysAgo rellena', () => {
    const btnElement = fixture.debugElement.query(By.css('button'))
    btnElement.nativeElement.click()
    expect(component.apodObject6DaysAgo).toBeDefined();
  });

  it('Boton detalle pulsado, variable apodObject5DaysAgo rellena', () => {
    const btnElement = fixture.debugElement.query(By.css('button'))
    btnElement.nativeElement.click()
    expect(component.apodObject5DaysAgo).toBeDefined();
  });

  it('Boton detalle pulsado, variable apodObject4DaysAgo rellena', () => {
    const btnElement = fixture.debugElement.query(By.css('button'))
    btnElement.nativeElement.click()
    expect(component.apodObject4DaysAgo).toBeDefined();
  });

  it('Boton detalle pulsado, variable apodObject3DaysAgo rellena', () => {
    const btnElement = fixture.debugElement.query(By.css('button'))
    btnElement.nativeElement.click()
    expect(component.apodObject3DaysAgo).toBeDefined();
  });

  it('Boton detalle pulsado, variable apodObject2DaysAgo rellena', () => {
    const btnElement = fixture.debugElement.query(By.css('button'))
    btnElement.nativeElement.click()
    expect(component.apodObject2DaysAgo).toBeDefined();
  });

  it('Boton detalle pulsado, variable apodObject1DayAgo rellena', () => {
    const btnElement = fixture.debugElement.query(By.css('button'))
    btnElement.nativeElement.click()
    expect(component.apodObject1DayAgo).toBeDefined();
  });

});
