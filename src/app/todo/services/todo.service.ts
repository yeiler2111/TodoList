// src/app/todo/services/todo.service.ts
import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: 'pendiente' | 'en-curso' | 'realizada';
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private storageKey = 'todo-list';

  constructor() { }

  private getTodosFromStorage(): Todo[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveTodosToStorage(todos: Todo[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }

  getTodos(): Todo[] {
    return this.getTodosFromStorage();
  }

  addTodo(todo: Todo): void {
    const todos = this.getTodosFromStorage();
    let nextId = 1;
    if (todos.length > 0) {
      const objetoConMayorId = todos.reduce((max, current) => {
        return current.id > max.id ? current : max;
      }, todos[0]);
      nextId = objetoConMayorId.id + 1;
    }
    todo.id = nextId;
    todos.push(todo);
    this.saveTodosToStorage(todos);
  }

  updateTodo(updated: Todo): void {
    const todos = this.getTodosFromStorage().map(todo =>
      todo.id === updated.id ? updated : todo
    );
    this.saveTodosToStorage(todos);
  }

  deleteTodo(id: number): void {
    const todos = this.getTodosFromStorage().filter(todo => todo.id !== id);
    this.saveTodosToStorage(todos);
  }

  getTodoById(id: number): Todo | undefined {
    return this.getTodosFromStorage().find(todo => todo.id === id);
  }

  dataInitial(data: Todo[]) {
    this.saveTodosToStorage(data);
  }

  getTodosByStatus(status?: string): Todo[] {
    if (!status) {
      return this.getTodos();
    }
    return this.getTodos().filter(todo => todo.status === status);
  }
}
