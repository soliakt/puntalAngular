import { Component } from '@angular/core';
import { MobileSectionService } from '../../services/mobile-section/mobile-section.service';


@Component({
  selector: 'app-mobile-section',
  standalone: true,
  imports: [],
  templateUrl: './mobile-section.component.html',
  styleUrl: './mobile-section.component.css'
})
export class MobileSectionComponent {
  constructor(private mobilesectionService: MobileSectionService) { }

  onItemClick(item: string) {
    this.mobilesectionService.selectItem(item);
  }
}
