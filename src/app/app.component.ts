import { Component, HostListener, OnInit } from '@angular/core';
import { ToDoService } from './Service/to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title : string = "";
  intData: number = 1;

  constructor(private toDoSV:ToDoService)
  {
  }

  async ngOnInit() {
  }
}

