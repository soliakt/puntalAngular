import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiLaravelService } from '../../services/api-laravel/api-laravel.service';
import { ActivatedRoute } from '@angular/router';
import { FormCheckerService } from '../../services/form-check/form-checker.service';


@Component({
  selector: 'app-mobile-incident',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mobile-incident.component.html',
  styleUrl: './mobile-incident.component.css'
})
export class MobileIncidentComponent implements OnInit, OnDestroy {
  form: FormGroup;
  reservationId: any;
  data: any;
  formSubscription: any;
  reservation_id: number;

  constructor(
    private fb: FormBuilder,
    private apiLaravelService: ApiLaravelService,
    private route: ActivatedRoute,
    private formCheckerService: FormCheckerService
  ) {
    this.reservation_id = 0;
    this.form = this.fb.group({
      plate: [''],
      captain_name: [''],
      captain_id: [''],
      harbour: [''],
      berth: [''],
      comments:['']
    });
  }

  ngOnInit() {
    this.formSubscription = this.formCheckerService.formData$.subscribe(data => {
      if (data) {
        this.receiveFormData(data);
      }
    });
  }

  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }

  receiveFormData(formData: any) {
    this.data = formData;
    console.log(this.data);
    this.reservation_id = this.data.id_reservation;
    this.form.patchValue({
      plate: this.data.hin,
      captain_name: this.data.name_captain,
      captain_id: this.data.id_captain,
      harbour: this.data.dock_name,
      berth: this.data.berth_name
    });
  }

  onVolverClick() {
    const showIncident = false;
    this.formCheckerService.setShowIncident(showIncident);
  }
}
