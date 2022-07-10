import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  onSubmit(data: any) {

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
