import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { RegisterComponent } from './features/auth/register/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './features/auth/login/login/login.component';
import { DebtDetailComponent } from './features/debts/debt-detail/debt-detail/debt-detail.component';
import { DebtFormComponent } from './features/debts/debt-form/debt-form/debt-form.component';
import { DebtListComponent } from './features/debts/debt-list/debt-list/debt-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DebtDetailComponent,
    DebtFormComponent,
    DebtListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
