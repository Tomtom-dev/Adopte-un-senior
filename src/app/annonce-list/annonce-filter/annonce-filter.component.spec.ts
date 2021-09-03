import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceFilterComponent } from './annonce-filter.component';

describe('AnnonceFilterComponent', () => {
  let component: AnnonceFilterComponent;
  let fixture: ComponentFixture<AnnonceFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
