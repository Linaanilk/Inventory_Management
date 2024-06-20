import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends ComponentBase implements FormBase {

  loginForm!: FormGroup;
  username:any;
  password:any;

  constructor(
    private loginService: LoginService,
  ) {
    super();
  }

  /* Public Methods */
  initVariables(): void { }

  subscribeEvents(): void { }

  load(): void {
    this.buildForm();
  }

  unload(): void { }

  buildForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  bindForm(): void { }

  resetForm(): void {
    this.loginForm.reset();
  }

  
  login(): void {
    
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginService.login(this.loginForm.value);
    }
    else{
      alert("Please enter valid username and password");
    }
  }
}