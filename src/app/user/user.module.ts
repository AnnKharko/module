import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';



@NgModule({
  declarations: [UserComponent, UsersComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UsersComponent,
    UserComponent
  ],
  providers: [UserModule]
})
export class UserModule { }
