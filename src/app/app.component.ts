import { PatientDicom } from './models/patient-dicom';
import { Component, Input } from '@angular/core';
import { DicomTableSchema, TableSchemaConfig } from './models/dicom-table-schema';

@Component({
  selector: 'dicom-studies-table',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() patients:PatientDicom;
  @Input() tableSchema:DicomTableSchema;
  @Input() config:TableSchemaConfig;
  @Input() title:string;
}
