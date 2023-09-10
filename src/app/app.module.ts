import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoDetailComponent } from './to-do-list/to-do-detail/to-do-detail.component';
import { FormsModule } from '@angular/forms';
import { AddTextDirective } from './Directive/add-text.directive';
import { ZeroToEmptyPipePipe } from './Pipe/zero-to-empty-pipe.pipe';
import { ToDoService } from './Service/to-do.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoDetailComponent,
    AddTextDirective,
    ZeroToEmptyPipePipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
