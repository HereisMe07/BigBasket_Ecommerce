import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonIcon } from "@ionic/angular/standalone";
import { Router } from '@angular/router';

// import { IonIcon } from "@ionic/angular/standalone"; // Removed invalid import

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonIcon, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    userName: '',
    password: ''
  }

  constructor(private router: Router) {}

  onLogin() {
    if (this.loginObj.userName == "admin" && this.loginObj.password == "334455") {
      this.router.navigateByUrl('/products');
    } else {
      alert('Wrong Credentails')
    }
  }
}
