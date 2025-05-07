import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { of } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { TodoTableComponent } from './todo-table.component';

describe('TodoTableComponent', () => {
  let component: TodoTableComponent;
  let fixture: ComponentFixture<TodoTableComponent>;
  let todoServiceSpy: jasmine.SpyObj<TodoService>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    const todoServiceMock = jasmine.createSpyObj('TodoService', [
      'getTodos',
      'dataInitial',
      'addTodo',
      'updateTodo',
      'deleteTodo',
      'getTodosByStatus'
    ]);

    const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [TodoTableComponent],
      imports: [MatTableModule],
      providers: [
        { provide: TodoService, useValue: todoServiceMock },
        { provide: MatDialog, useValue: dialogMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoTableComponent);
    component = fixture.componentInstance;
    todoServiceSpy = TestBed.inject(TodoService) as jasmine.SpyObj<TodoService>;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined dataSource', () => {
    todoServiceSpy.getTodos.and.returnValue([]);
    component.ngOnInit();
    expect(component.dataSource).toBeDefined();
  });

  it('should open the dialog when openCreateDialog is called', () => {
    const afterClosed$ = of({ title: 'Test', description: 'Desc', status: 'pendiente', id: 99 });
    dialogSpy.open.and.returnValue({ afterClosed: () => afterClosed$ } as any);

    component.openCreateDialog();

    expect(dialogSpy.open).toHaveBeenCalled();
    expect(todoServiceSpy.addTodo).toHaveBeenCalled();
  });

  
});
