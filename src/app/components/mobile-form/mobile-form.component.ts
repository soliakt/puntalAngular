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
  selectedFile: File | null = null;
  fileUrl: string;

  constructor(
    private fb: FormBuilder,
    private apiLaravelService: ApiLaravelService,
    private route: ActivatedRoute,
    private formCheckerService: FormCheckerService
  ) {
    this.reservation_id = 0;
    this.fileUrl = "";
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
        console.log(this.dataSelectionRow);
      }
    });
  }

  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.fileUrl = `assets/images/${this.selectedFile.name}`;
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
    if(this.dataSelectionRow.date_entry_confirmed != null){
      this.getImage();
    } else{
      this.fileUrl = "";
    }
  }

  onVolverClick(){
    const showForm = false;
    this.formCheckerService.setShowForm(showForm);
  }

  onReportClick() {
    const showIncident = true;
    this.formCheckerService.setShowIncident(showIncident);
    this.formCheckerService.setFormData(this.dataSelectionRow);
  }

  onRegisterClick(){
      console.log(this.reservation_id);
      this.apiLaravelService.updateReservationConfirmation(this.reservation_id).subscribe(
        (response) => {
          console.log('Confirmación completada:', response);
        },
        (error) => {
          console.error('Error al confirmar:', error);
        }
      );
      this.apiLaravelService.saveImagePath(this.reservation_id, this.fileUrl).subscribe(response => {
        console.log('Guardado satisfactoriamente', response);
      }, error => {
        console.error('Error al guardar:', error);
      });
      this.onVolverClick();
  }

  getImage(){
    this.apiLaravelService.getImage(this.reservation_id).subscribe(response => {
      this.fileUrl = response;
    }, error => {
      console.error('Error al guardar:', error);
    });
  }
}
