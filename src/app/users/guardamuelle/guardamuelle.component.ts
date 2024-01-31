import { Component } from '@angular/core';
import { MobileNavbarComponent } from '../../components/mobile-navbar/mobile-navbar.component';
import { MobileProfileComponent } from '../../components/mobile-profile/mobile-profile.component';
import { MobileSectionComponent } from '../../components/mobile-section/mobile-section.component';
import { MobileTableComponent } from '../../components/mobile-table/mobile-table.component';

@Component({
  selector: 'app-guardamuelle',
  standalone: true,
  imports: [MobileNavbarComponent, MobileProfileComponent, MobileSectionComponent, MobileTableComponent],
  templateUrl: './guardamuelle.component.html',
  styleUrl: './guardamuelle.component.css'
})
export class GuardamuelleComponent {

}
