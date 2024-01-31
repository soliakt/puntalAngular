import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AduanasTableComponent } from './aduanas-table.component';

describe('AduanasTableComponent', () => {
  let component: AduanasTableComponent;
  let fixture: ComponentFixture<AduanasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AduanasTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AduanasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
