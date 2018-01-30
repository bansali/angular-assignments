import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.users = this.userService.activeUsers;
  }
  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
    // this.userSetToInactive.emit(id);
  }
}
