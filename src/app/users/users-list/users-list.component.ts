import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../state/user.model';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html'
})
export class UsersComponent {
  @Input()
  users: User[];

  @Output()
  active = new EventEmitter<ID>();
}
