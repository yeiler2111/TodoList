import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [
    TodoTableComponent,
    TodoDialogComponent,
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TodoRoutingModule,
  ],
   exports:[MainLayoutComponent]
})
export class TodoModule {}
