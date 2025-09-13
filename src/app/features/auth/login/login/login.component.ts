import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
  loading = false;


    constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  submit() {
    if (this.form.invalid) return;

    this.loading = true;

    this.auth.login(this.form.value.email!, this.form.value.password!).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/debts']); // Redirige al listado de deudas
      },
      error: err => {
        this.loading = false;
        alert(err.error?.error || 'Credenciales inválidas');
      }
    });
  }
}
