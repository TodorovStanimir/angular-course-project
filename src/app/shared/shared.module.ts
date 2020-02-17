import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DropdownDirective } from './navigation/dropdown.directive';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavigationComponent,
    DropdownDirective,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent,
    NavigationComponent,
    DropdownDirective,
    NotFoundComponent]
})
export class SharedModule { }
