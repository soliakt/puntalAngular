import { Component } from '@angular/core';
import { MobileSectionService } from '../../services/mobile-section/mobile-section.service';

@Component({
  selector: 'app-mobile-section',
  templateUrl: './mobile-section.component.html',
  styleUrls: ['./mobile-section.component.css']
})
export class MobileSectionComponent {

  constructor(private mobileSectionService: MobileSectionService) {}

  selectItem(item: string, event: MouseEvent) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(navItem => navItem.classList.remove('mobile-section__active'));
    (event.target as HTMLElement).parentElement?.classList.add('mobile-section__active');
    this.mobileSectionService.selectItem(item);
  }
}