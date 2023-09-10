import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoDetailComponent } from './to-do-list/to-do-detail/to-do-detail.component';

const routes: Routes = [
  {path:"todoLst", component: ToDoListComponent},
  {path:"todoDetail", component: ToDoDetailComponent},
  {path:"**", component: ToDoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
