import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } { 
    return this.contactForm.controls; 
  }

  onSubmit(): void {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    // In a real application, you would send the form data to a backend service
    console.log('Form submitted:', this.contactForm.value);
    
    // Show success message and reset form
    this.formSubmitted = true;
    this.contactForm.reset();
    this.submitted = false;
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      this.formSubmitted = false;
    }, 5000);
  }
}
