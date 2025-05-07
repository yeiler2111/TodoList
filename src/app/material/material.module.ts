// src/app/app.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // Botones
import { MatCheckboxModule } from '@angular/material/checkbox'; // Selección de filas (opcional)
import { MatDialogModule } from '@angular/material/dialog'; // Diálogos (para crear/editar)
import { MatFormFieldModule } from '@angular/material/form-field'; // Contenedor de formulario
import { MatIconModule } from '@angular/material/icon'; // Íconos
import { MatInputModule } from '@angular/material/input'; // Inputs
import { MatPaginatorModule } from '@angular/material/paginator'; // Paginación
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select'; // Select (para estado)
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Mensajes emergentes
import { MatSortModule } from '@angular/material/sort'; // Ordenamiento
import { MatTableModule } from '@angular/material/table'; // Tabla


@NgModule({
  exports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
  ],
  
})
export class MaterialModule {}
