import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register/register.component';
import { LoginComponent } from './features/auth/login/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DebtDetailComponent } from './features/debts/debt-detail/debt-detail/debt-detail.component';
import { DebtFormComponent } from './features/debts/debt-form/debt-form/debt-form.component';
import { DebtListComponent } from './features/debts/debt-list/debt-list/debt-list.component';

// Definición de las rutas
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'debts', component: DebtListComponent, canActivate: [AuthGuard] },
  { path: 'debts/new', component: DebtFormComponent, canActivate: [AuthGuard] },
  { path: 'debts/:id', component: DebtDetailComponent, canActivate: [AuthGuard] },
  { path: 'debts/:id/edit', component: DebtFormComponent, canActivate: [AuthGuard] },

  // Redirecciones
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
