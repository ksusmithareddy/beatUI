import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value: any;
  errorMessage :string ='';
  empId !: number;
  jwt !: string;
  access !: string;
  loginForm: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    }
  );

  constructor(private router: Router, public authservice: AuthService) { }
  ngOnInit() { }

  sendData() {
    this.value = this.loginForm.value;
    if (this.value.email && this.value.password) {
      this.authservice.login(this.value.email, this.value.password).subscribe(
        (response: any) => {
          console.log(response);
          this.empId=response.empId;
         
          if (response.empId && response.jwt && response.accessId){
            { localStorage.setItem('empId',this.empId.toString());
              this.router.navigate(['/homepage']);
            }
          
          }

          else {
            this.router.navigate(['/login']);
          }
        }
      )
    }
  }

}


