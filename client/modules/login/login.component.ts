import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ErrorHandlerActions } from '../../redux/actions/error/errorHandler.actions';
import { UserFormActions } from '../../redux/actions/userForm/userForm.actions';
import { UserActions } from '../../redux/actions/user/user.actions';
import { SEOActions } from '../../redux/actions/seo/seo.actions';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder,
    public userActions: UserActions) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      console.log(values);
      this.userActions.login(this.form);
    }
  }
}
