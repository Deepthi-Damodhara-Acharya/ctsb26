import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/19-guard/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  user:any = {
    name: ""
  }
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

}
