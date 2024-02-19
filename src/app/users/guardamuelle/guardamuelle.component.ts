import { Component } from '@angular/core';
import { MobileNavbarComponent } from '../../components/mobile-navbar/mobile-navbar.component';
import { MobileProfileComponent } from '../../components/mobile-profile/mobile-profile.component';
import { MobileFormComponent } from '../../components/mobile-form/mobile-form.component';
import { MobileTableModule } from '../../components/mobile-table/mobile-table.module';
import { MobileSectionModule } from '../../components/mobile-section/mobile-section.module';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-guardamuelle',
  standalone: true,
  imports: [MobileNavbarComponent, MobileProfileComponent, MobileSectionModule, MobileTableModule, MobileFormComponent, RouterOutlet],
  templateUrl: './guardamuelle.component.html',
  styleUrl: './guardamuelle.component.css'
})
export class GuardamuelleComponent {

}
