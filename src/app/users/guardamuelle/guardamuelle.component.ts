import { Component } from '@angular/core';
import { MobileNavbarComponent } from '../../components/mobile-navbar/mobile-navbar.component';
import { MobileProfileComponent } from '../../components/mobile-profile/mobile-profile.component';
import { MobileFormComponent } from '../../components/mobile-form/mobile-form.component';
import { MobileTableModule } from '../../components/mobile-table/mobile-table.module';
import { MobileSectionModule } from '../../components/mobile-section/mobile-section.module';
import { Router, RouterOutlet } from '@angular/router';
import { FormCheckerService } from '../../services/form-check/form-checker.service';

@Component({
  selector: 'app-guardamuelle',
  standalone: true,
  imports: [MobileNavbarComponent, MobileProfileComponent, MobileSectionModule, MobileTableModule, MobileFormComponent,RouterOutlet],
  templateUrl: './guardamuelle.component.html',
  styleUrl: './guardamuelle.component.css'
})

export class GuardamuelleComponent {
    showForm: boolean = false;
    constructor(
      private router: Router,
      private formCheckerService: FormCheckerService  
    ){ }

    ngOnInit() {
      this.formCheckerService.showForm$.subscribe(showForm => {
        this.showForm = showForm;
        console.log(this.showForm);
        if (this.showForm) {
          this.router.navigate(['/mobile-form']);
        }
      });
    }
}
