import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Todo, TodoService } from '../../services/todo.service';
import { TodoDialogComponent } from '../todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'status', 'actions'];
  dataSource = new MatTableDataSource<Todo>();
  selectedRow: Todo | null = null;
  @Input() selectedStatus: string = '';


  constructor(private todoService: TodoService, private dialog: MatDialog) {}

  ngOnInit(): void {
    const todos = this.todoService.getTodos();

    if (todos.length === 0) {
      this.todoService.dataInitial([
        {
          title: 'backend en .net',
          description: 'realizar backen de manera escalable. realizar arquitectura del proyecto',
          status: 'pendiente',
          id: 1
        },
        {
          title: 'frontend en angular',
          description: 'diseño con figma y creacion de microComponentes',
          status: 'pendiente',
          id: 2
        },
        {
          title: 'Analisis de modelo de bases de datos',
          description: 'verificar que los querys cumplan con lo requerido.',
          status: 'pendiente',
          id: 3
        }
      ]);
    }

    this.dataSource.data = this.todoService.getTodos();
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      width: '700px',
      height: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todoService.addTodo(result);
        this.dataSource.data = this.todoService.getTodos();
      }
    });
  }

  selectRow(row: Todo): void {
    this.selectedRow = row;
  }

  editTodo(todo: Todo): void {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      width: '400px',
      data: { ...todo }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todoService.updateTodo(result);
        this.dataSource.data = this.todoService.getTodos();
      }
    });
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo.id);
    this.dataSource.data = this.todoService.getTodos();
  }

  applyFilter(status?:string): void {
    this.dataSource.data = this.todoService.getTodosByStatus(status);
  }
}
