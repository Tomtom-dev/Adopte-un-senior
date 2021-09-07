import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselCardComponent } from './carrousel-card.component';

describe('CarrouselCardComponent', () => {
  let component: CarrouselCardComponent;
  let fixture: ComponentFixture<CarrouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
