import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users-list/users-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UsersPageComponent } from './users-page/users-page.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [UsersComponent, UserInfoComponent, UsersPageComponent]
})
export class UsersModule {}
