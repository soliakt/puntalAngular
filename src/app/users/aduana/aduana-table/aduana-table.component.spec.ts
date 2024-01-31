import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AduanaTableComponent } from './aduana-table.component';

describe('AduanaTableComponent', () => {
  let component: AduanaTableComponent;
  let fixture: ComponentFixture<AduanaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AduanaTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AduanaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
