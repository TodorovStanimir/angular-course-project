import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerForm', { static: true }) htmlForm: NgForm;

  get formControls() { return this.htmlForm.controls; }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  hadleLogin(userInfo: IUser) {
    userInfo[`password`] = userInfo[`passwords`][`password`];
    delete userInfo[`passwords`];

    this.userService.register(userInfo).subscribe(res => {
      this.router.navigate(['/profile/login']);
    });
  }



}
