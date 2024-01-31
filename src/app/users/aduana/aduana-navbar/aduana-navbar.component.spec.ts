import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AduanaNavbarComponent } from './aduana-navbar.component';

describe('AduanaNavbarComponent', () => {
  let component: AduanaNavbarComponent;
  let fixture: ComponentFixture<AduanaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AduanaNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AduanaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
