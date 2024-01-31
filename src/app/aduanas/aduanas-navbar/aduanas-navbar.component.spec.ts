import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AduanasNavbarComponent } from './aduanas-navbar.component';

describe('AduanasNavbarComponent', () => {
  let component: AduanasNavbarComponent;
  let fixture: ComponentFixture<AduanasNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AduanasNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AduanasNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
