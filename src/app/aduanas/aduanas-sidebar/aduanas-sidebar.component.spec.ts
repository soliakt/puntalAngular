import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AduanasSidebarComponent } from './aduanas-sidebar.component';

describe('AduanasSidebarComponent', () => {
  let component: AduanasSidebarComponent;
  let fixture: ComponentFixture<AduanasSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AduanasSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AduanasSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
