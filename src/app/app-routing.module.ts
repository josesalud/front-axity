import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './User/list-user/list-user.component';
import { FormUserComponent } from './User/form-user/form-user.component';

const routes: Routes = [
  {
    path: "Usuarios",
    component: ListUserComponent
  },
  {
    path: "AgregarUsuarios",
    component: FormUserComponent
  },
  {
    path:"**",
    redirectTo: "Usuarios"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
