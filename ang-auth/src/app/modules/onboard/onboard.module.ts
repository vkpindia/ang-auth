import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardRoutingModule } from './onboard-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration';
import { ForgotComponent } from './forgot';
import { LoginComponent } from './login';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RegistrationComponent, ForgotComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    OnboardRoutingModule
  ]
})
export class OnboardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: OnboardModule,
      providers: []
    };
  }
}
