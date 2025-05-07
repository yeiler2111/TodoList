import { Component, ViewChild } from '@angular/core';
import { TodoTableComponent } from '../../components/todo-table/todo-table.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  selectedStatus: string = '';

  @ViewChild(TodoTableComponent) todoTableComponent!: TodoTableComponent;
  applyFilter(): void {
    this.todoTableComponent.applyFilter(this.selectedStatus);
  }

}
