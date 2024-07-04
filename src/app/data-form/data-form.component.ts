import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent {
  step: number = 1;
  userDataForm: any = FormGroup;
  constructor(private fb: FormBuilder) {
    this.userDataForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      businessInformation:['',Validators.required],
      businessName: ['', Validators.required],
      businessAddress: ['', Validators.required],
      comments: ['', Validators.required],
    });
  }

  nextStep() {
    if (this.step < 4) {
      this.step++;
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  onSubmit() {
    const data = this.userDataForm.value;
    console.log(data, '=====================');
    if (data) {
      localStorage.setItem('userData', JSON.stringify(data));
      alert('user data submitted successfully');
      this.userDataForm.reset();
      this.step = 1;
    } else {
      alert('user data submission fail');
    }
  }
}
