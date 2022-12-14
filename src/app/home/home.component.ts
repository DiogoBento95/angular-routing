import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.authService.login();
    console.log(this.authService.loggedIn);
  }

  onLogout() {
    this.authService.logout();
    console.log(this.authService.loggedIn);
  }
}
