import { Component } from '@angular/core';
import { MobileSectionService } from '../../services/mobile-section/mobile-section.service';

@Component({
  selector: 'app-mobile-section',
  templateUrl: './mobile-section.component.html',
  styleUrls: ['./mobile-section.component.css']
})
export class MobileSectionComponent {
  constructor(private mobileSectionService: MobileSectionService) {}

  selectItem(item: string) {
    this.mobileSectionService.selectItem(item);
  }
}
