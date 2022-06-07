import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IAuth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
auth: IAuth = {
    username: "",
    email: "",
    password: "",
    role: 0
  }
  constructor(
    private authServices: AuthService,
    private router: Router,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authServices.signin(this.auth).subscribe(data => {
     
      localStorage.setItem("user",JSON.stringify(data))
      this.notification.create(
        "success",
        "Đăng nhập thành công",
        "Đăng nhập thành công"
      )
      this.router.navigateByUrl('/')
    })
  }

}
