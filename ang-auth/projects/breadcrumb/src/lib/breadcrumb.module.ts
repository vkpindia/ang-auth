import { NgModule, ModuleWithProviders } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BreadcrumbService } from './breadcrumb.service';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule
  ],
  providers: [
    BreadcrumbService
  ],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BreadcrumbModule,
      providers: []
    };
  }
}
