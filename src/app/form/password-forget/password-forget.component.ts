import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-password-forget',
  templateUrl: './password-forget.component.html',
  styleUrls: ['./password-forget.component.scss']
})
export class PasswordForgetComponent implements OnInit {

  public sendEmailFrom: FormGroup;
  constructor(private _builder: FormBuilder, private _service: ServiceService, private _router: Router) { }

  ngOnInit() {

    this.sendEmailFrom = this._builder.group({
      email: ['', Validators.required],
    });

  }

  onSubmit() {
    console.log(this.sendEmailFrom.value);
    console.log(this.sendEmailFrom.valid);
    if (this.sendEmailFrom.valid) {
     /*  this._service.sendEmailLink(this.sendEmailFrom.value)
        .subscribe(res => {
          console.log(res);

        }) */

    }

  }

}
