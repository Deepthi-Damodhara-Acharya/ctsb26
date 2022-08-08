import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/19-guard/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  getLogin(){
    // send ajax request

    let res = {user:"test"}
    this.userService.name = res.user;
    this.userService.valid = true;

    this.router.navigate(["/", "welcome"]);
  }
}
