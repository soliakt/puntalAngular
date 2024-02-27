import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileIncidentComponent } from './mobile-incident.component';

describe('MobileIncidentComponent', () => {
  let component: MobileIncidentComponent;
  let fixture: ComponentFixture<MobileIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileIncidentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
