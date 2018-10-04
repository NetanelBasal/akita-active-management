import { Injectable } from '@angular/core';
import { UsersStore } from './users.store';
import { of } from 'rxjs';
import data from '../users.data';
import { ID } from '@datorama/akita';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private usersStore: UsersStore) {}

  get() {
    of(data).subscribe(entities => {
      this.usersStore.set(entities);
    });
  }

  setActive(id: ID) {
    this.usersStore.setActive(id);
  }

  updateActive(user: User) {
    this.usersStore.updateActive(user);
  }
}
