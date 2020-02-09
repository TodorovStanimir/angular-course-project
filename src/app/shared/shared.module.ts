import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DropdownDirective } from './navigation/dropdown.directive';
import { CollapseDirective } from './navigation/collapse.directive';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    DropdownDirective,
    CollapseDirective,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent,
    HeaderComponent,
    NavigationComponent,
    DropdownDirective,
    CollapseDirective,
    NotFoundComponent]
})
export class SharedModule { }
