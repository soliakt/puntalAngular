import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiLaravelService } from '../../services/api-laravel/api-laravel.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mobile-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mobile-form.component.html',
  styleUrl: './mobile-form.component.css'
})
export class MobileFormComponent implements OnInit {
  form: FormGroup;
  reservationId: any;
  dataSelectionRow: any;

  constructor(
    private fb: FormBuilder,
    private apiLaravelService: ApiLaravelService,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      plate: [''],
      captain_name: [''],
      captain_id: [''],
      harbour: [''],
      berth: ['']
    });
  }

    ngOnInit() {
      this.route.params.subscribe(params => {
      });
    }
  

  receiveRowData(rowData: any) {
    this.dataSelectionRow = rowData;
    this.form.patchValue({
      plate: this.dataSelectionRow.hin,
      captain_name: this.dataSelectionRow.name_captain,
      captain_id: this.dataSelectionRow.id_captain,
      harbour: this.dataSelectionRow.dock_name,
      berth: this.dataSelectionRow.berth_name
    });
  }

  onVolverClick(){
    
  }

  onRegisterClick(reservation_id : number){
    this.apiLaravelService.updateReservationConfirmation(reservation_id).subscribe(
      (response) => {
        console.log('Confirmación completada:', response);
      },
      (error) => {
        console.error('Error al confirmar:', error);
      }
    );
  }
}
