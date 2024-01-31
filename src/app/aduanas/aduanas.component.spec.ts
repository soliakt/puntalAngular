import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AduanasComponent } from './aduanas.component';

describe('AduanasComponent', () => {
  let component: AduanasComponent;
  let fixture: ComponentFixture<AduanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AduanasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AduanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
