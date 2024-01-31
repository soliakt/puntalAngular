import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AduanaSidebarComponent } from './aduana-sidebar.component';

describe('AduanaSidebarComponent', () => {
  let component: AduanaSidebarComponent;
  let fixture: ComponentFixture<AduanaSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AduanaSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AduanaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
