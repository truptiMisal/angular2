import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewBooksComponent } from './new-books.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NewBooksComponent],
  exports: [NewBooksComponent]
})
export class SharebooksModule { }
