import { CalResultComponent } from './cal-result/cal-result.component';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calResultNumber: number = 0;

  public constructor(private matDialog: MatDialog) {

  }

  form = new FormGroup({
    weight: new FormControl('',
      [Validators.required, Validators.max(300), Validators.min(10)]
    ),
    height: new FormControl('',
      [Validators.required, Validators.max(210), Validators.min(50)]
    ),
    age: new FormControl('',
      [Validators.required, Validators.min(10), Validators.max(70)]
    )
  });

  onSubmit(data: FormGroup) {
    this.calResultNumber = 10*(parseInt(data.value.weight)/Math.pow((parseInt(data.value.height)/10), 2));
    this.matDialog.open(CalResultComponent, {
      data: this.calResultNumber,
      height: "20rem",
      width: "20rem"
    });
    data.reset();
  }

  // getters :

  get weight() {
    return this.form.get('weight'); 
  }

  get height() {
    return this.form.get('height');
  }

  get age() {
    return this.form.get('age');
  }
}
