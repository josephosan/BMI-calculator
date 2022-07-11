import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-cal-result',
  templateUrl: './cal-result.component.html',
  styleUrls: ['./cal-result.component.css']
})
export class CalResultComponent implements OnInit {
  result: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data: string, private matDialogRef: MatDialogRef<CalResultComponent>) {
    this.result = data;
  }

  ngOnInit(): void {
  }
  
  onCloseClick() {
    this.matDialogRef.close();
  }
}
