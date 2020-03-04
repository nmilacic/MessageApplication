import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DetailService } from '../shared/detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  constructor(public dialogRef: MatDialogRef<AddMessageComponent>, public service: DetailService,
              public toastr: ToastrService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resetForm();
    this.messageForm = this.formBuilder.group({
      TextMessage: ['', Validators.required],
   });
  }
  get f() { return this.messageForm.controls; }
  closeClick(): void {
   this.dialogRef.close();
  }
  clearMessageForm() {
    this.messageForm.reset({
        TextMessage: '',
        
       });
  }
  resetForm(form?: NgForm) {
    if (form != null) {
    form.resetForm();
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
  }
    this.service.postMessageDetail(this.messageForm.value).subscribe(
    res => {
          this.clearMessageForm();
          this.toastr.success('Uspješno');
          this.resetForm();
          this.service.refreshMessageList();
          this.closeClick();
       },
       err => {
            this.toastr.error('Pokušajte ponovo', 'Došlo je do greške');
          }
          );
  }
}
