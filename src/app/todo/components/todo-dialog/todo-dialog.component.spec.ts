import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Todo } from '../../services/todo.service';
import { TodoDialogComponent } from './todo-dialog.component';

describe('TodoDialogComponent', () => {
  let component: TodoDialogComponent;
  let fixture: ComponentFixture<TodoDialogComponent>;
  let dialogRef: MatDialogRef<TodoDialogComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  const mockTodoData: Todo = {
    id: 1,
    title: 'Comprar leche',
    description: 'Ir al supermercado a comprar leche.',
    status: 'pendiente'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoDialogComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        MatSelectModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoDialogComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.inject(MatDialogRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should mark title as invalid if it is empty', () => {
    const titleControl = component.form.controls['title'];
    titleControl.setValue('');
    expect(titleControl.invalid).toBeTrue();
  });

  it('should mark title as valid if it has a value', () => {
    const titleControl = component.form.controls['title'];
    titleControl.setValue('Nueva tarea');
    expect(titleControl.valid).toBeTrue();
  });


  it('should not call dialogRef.close when onSave is called and the form is invalid', () => {
    component.onSave();
    expect(mockDialogRef.close).not.toHaveBeenCalled();
  });


});