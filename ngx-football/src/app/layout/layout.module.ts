import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { LayoutComponent } from './layout.component';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [
    AsideNavComponent, 
    HeaderNavComponent, 
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PagesModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
