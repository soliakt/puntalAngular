import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiLaravelService } from '../../services/api-laravel/api-laravel.service';
import { ActivatedRoute } from '@angular/router';
import { FormCheckerService } from '../../services/form-check/form-checker.service';


@Component({
  selector: 'app-mobile-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mobile-form.component.html',
  styleUrl: './mobile-form.component.css'
})
export class MobileFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  reservationId: any;
  dataSelectionRow: any;
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
      berth: ['']
    });
  }

  ngOnInit() {
    this.formSubscription = this.formCheckerService.formData$.subscribe(data => {
      if (data) {
        this.receiveRowData(data);
      }
    });
  }

  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }

  receiveRowData(rowData: any) {
    this.dataSelectionRow = rowData;
    console.log(this.dataSelectionRow);
    this.reservation_id = this.dataSelectionRow.id_reservation;
    this.form.patchValue({
      plate: this.dataSelectionRow.hin,
      captain_name: this.dataSelectionRow.name_captain,
      captain_id: this.dataSelectionRow.id_captain,
      harbour: this.dataSelectionRow.dock_name,
      berth: this.dataSelectionRow.berth_name
    });
  }

  onVolverClick(){
    const showForm = false;
    this.formCheckerService.setShowForm(showForm);
  }

  onRegisterClick(){
      console.log(this.reservation_id);
      this.apiLaravelService.updateReservationConfirmation(this.reservation_id).subscribe(
        (response) => {
          console.log('Confirmación completada:', response);
          this.onVolverClick();
        },
        (error) => {
          console.error('Error al confirmar:', error);
        }
      );
  }
}
