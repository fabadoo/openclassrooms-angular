import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {Subscription} from 'rxjs';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject
      .subscribe((users) => {
        this.users = users;
    });
    this.userService.emitUsers();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
