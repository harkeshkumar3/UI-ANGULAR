import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _builder: FormBuilder, private _service: ServiceService, private _router: Router) { }

  public loginFrom: FormGroup;

  ngOnInit() {
    // Initilize the Form Control 
    this.loginFrom = this._builder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });

    let token: any = localStorage.getItem('currentUser');
    if (!!token) {
      const valid = this._service.isTokenExpired(token)
        .subscribe(res => {
          console.log(res);
          this._service.login();
          this._router.navigate(['/user-deshboard'])
        }, error => {
          console.log(error);

          alert(error.error.message + " Error Code " + error.error.status + "\n Please Re-login again");

        });
      console.log(valid);

    }
  }
  /**
   * To Submit Login Info
   * Getting Form Value 
   * UserName, Password enter by User
   */
  onSubmit() {

    // Getting User Login From Value
    // sending User fill information to service to validate
    console.log(this.loginFrom.value);
    console.log(this.loginFrom.valid);

    this._service.setUserLogin(this.loginFrom.value)
      .subscribe(res => {

        //After Successfull Login 
        // Setting Token Value to Local Storage 
        localStorage.setItem("currentUser", res.Token)
        //Update Subject As User is Login
        this._service.login();
        //After update local Storage, It will re-direct to User Dashboard
        this._router.navigate(['/user-deshboard'])

      }, error => {
        // Error Reposnse Messge Handling 
        //Showing Response Message to user know password is Authentication field
        console.log(error);
        alert(error.error.message)
      })
  }




}
