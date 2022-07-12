import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-cal-result',
  templateUrl: './cal-result.component.html',
  styleUrls: ['./cal-result.component.css']
})
export class CalResultComponent implements OnInit {
  inputData: any;
  result: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) private data: {
    weight: string,
    height: string,
    radio: string
  }, private matDialogRef: MatDialogRef<CalResultComponent>) {
    this.inputData = data;

    
    if (this.inputData.radio == 'male') {
      this.result = this.calculateBMIMale(data);
    } else {
      this.result = this.calculateBMIFemale(data);
    }
    console.log(this.result);
  }

  ngOnInit(): void {
  }
  
  onCloseClick() {
    this.matDialogRef.close();
  }

  calculateBMIFemale(data: any) {
    return 100*(parseInt(data.weight) / Math.pow(parseInt(data.height)/10, 2));
  }

  calculateBMIMale(data: any) {
    return 100*(parseInt(data.weight) / Math.pow(parseInt(data.height)/10, 2));
  }

  isTheBMIValid(BMI: number) { 
    return true;
  }
}
