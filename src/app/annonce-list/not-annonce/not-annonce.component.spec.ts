import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAnnonceComponent } from './not-annonce.component';

describe('NotAnnonceComponent', () => {
  let component: NotAnnonceComponent;
  let fixture: ComponentFixture<NotAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
