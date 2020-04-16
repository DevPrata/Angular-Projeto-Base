import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';

@NgModule({
  declarations: [
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    // Modulos compartilhados
    CommonModule,
    ReactiveFormsModule,

    // Componentes compartilhados
    BreadCrumbComponent
  ]
})
export class SharedModule { }
