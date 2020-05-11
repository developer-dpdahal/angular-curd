import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddUserComponent} from './users/add-user/add-user.component';
import {ShowUserComponent} from './users/show-user/show-user.component';
import {HomeComponent} from './users/home/home.component';
import {UpdateUserComponent} from './users/update-user/update-user.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'show-user',
    component: ShowUserComponent
  },
  {
    path: 'update-user/:id',
    component: UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
