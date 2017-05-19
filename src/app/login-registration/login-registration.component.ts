import { Component, OnInit } from '@angular/core';
import { LoginData } from './../user/login';
import { Register } from './../user/register';
import { Router } from '@angular/router';
import { UserService } from './../user/user.service';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css'],
  providers: [UserService]
})
export class LoginRegistrationComponent implements OnInit {

  loginData: LoginData = new LoginData();
  register: Register = new Register();
  error: string;
  router: Router;
  logindata: any;

  constructor(
    _router: Router,
    private userService: UserService,
    private app: AppComponent) {
    this.router = _router;
  }

  ngOnInit() {
  }

  public login(): void {
    console.log(this.loginData);
    this.error = '';
    this.userService.login(this.loginData).subscribe(
      data => {
        this.handleSuccess(data);
        error => this.handleError(error);
      });
  }

  public registerUser():void{
    this.error = '';
    this.userService.register(this.register).subscribe(
      data =>{
        error => this.error = error;
      }
    )
  }
    private handleSuccess(data: any) {
    this.userService.setAccessToken(data.token_type + ' ' + data.access_token);
    // this.app.userPartyId = data.PARTY_ID;
    this.app.isLoggedIn = true;
    this.router.navigateByUrl('/dashboard');
  }

  private handleError(error: any) {
    this.error = error;
  }

}
