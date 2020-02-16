import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, DoCheck {

  username: string;
  isLoggedIn: boolean;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.isLoggedIn = this.userService.isAuthenticated();
    this.username = localStorage.getItem(`username`);
  }

  logout() {
    this.userService.logout().subscribe(data => {
      localStorage.clear();
      this.router.navigate(['/profile/login']);
    });
  }

}
