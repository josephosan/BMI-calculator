import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() type: String = 'text';
  @Input() placeholder: String = 'plane text';
  @Input() control: FormControl = new FormControl;


  ngOnInit(): void {
      
  }

  err(data: any) {
    console.log(data);
  }
}