import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardamuelleComponent } from './guardamuelle.component';

describe('GuardamuelleComponent', () => {
  let component: GuardamuelleComponent;
  let fixture: ComponentFixture<GuardamuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardamuelleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuardamuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
