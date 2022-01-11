import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createloa',
  templateUrl: './createloa.component.html',
  styleUrls: ['./createloa.component.css']
})
export class CreateloaComponent implements OnInit {
  

  Jurusan = [
    { value: 'BCE', text:  'BACHELOR OF CIVIL ENGINEERING' },
    { value: 'BME', text: 'BACHELOR OF MECHANICAL ENGINEERING' },
    { value: 'BEE', text: 'BACHELOR OF ELECTRICAL ENGINEERING' },
    { value: 'BIE', text: 'BACHELOR OF INFORMATION ENGINEERING' },
    { value: 'BLE', text: 'BACHELOR OF INDUSTRIAL ENGINEERING' },
    { value: 'BIS', text: 'BACHELOR IN INFORMATION SYSTEM' },
    { value: 'BM', text: 'BACHELOR IN MANAGEMENT' },
    { value: 'BDB', text: 'BACHELOR IN DIGITAL BUSINESS' },
    { value: 'BMM', text: 'BACHELOR IN MARKETING MANAGEMENT' },
    { value: 'BA', text: 'DIPLOMA IN ACCOUNTING' },
    { value: 'BP', text: 'BACHELOR IN PHARMACY' },
    { value: 'MEE', text: 'MASTER IN ELECTRICAL ENGINEERING' }
  ];

  Faculty = [
    { value: 'CSE', text: 'COMPUTER SCIENCE AND ENGINEERING' },
    { value: 'EB', text: 'ECONOMY AND BUSINESS' },
    { value: 'P', text: 'PHARMACY' },
  ];
  
  Grade = [
    { value: 'A', text: 'A' },
    { value: 'B', text: 'B' },
    { value: 'C', text: 'C' },
  ];

  Campus = [
    { value: 'A', text: 'A' },
    { value: 'B', text: 'B' },
    { value: 'C', text: 'C' },
  ];

  PIC = [
    { value: 'name', text:  'Ms.Tasya' },
    { value: 'name', text: 'Ms.Halim' },
  ];

  Package = [
    { value: 'TS', text: 'Talent Scholarship' },
    { value: 'As', text: 'Academic Scholarship' },
    { value: 'ODS', text: 'Open days Scholarship' },
    { value: 'TLS', text: 'Tranforming Live Scholarship' },
    { value: 'EBR', text: 'Early bird registration' }
  ];

  Class = [
    { value: 'Pagi', text: 'Reguler Pagi' },
    { value: 'Sore', text: 'Reguler Sore' },
    { value: 'KRYWN', text: 'Karyawan' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
