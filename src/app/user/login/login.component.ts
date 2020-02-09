import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  hadleLogin(user: object) {
    this.userService.login(user).subscribe((data) => {
      this.toastr.success('Logged in succesfully');
      this.userService.saveUserInfo(data);
      this.router.navigate(['/home']);
    });
  }
}
