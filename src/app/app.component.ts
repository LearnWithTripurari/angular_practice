import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {

  }

  login(loginFormRef: NgForm) {

    console.log(loginFormRef)

    if(loginFormRef.invalid) {
      return;
    }
     const email = loginFormRef.form.value.email;
     const password = loginFormRef.form.value.password;

    console.log(email, password)
  }
}
