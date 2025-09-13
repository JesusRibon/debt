import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  });

   constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

     submit() {
    if (this.form.value.password !== this.form.value.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.auth.register(this.form.value.email!, this.form.value.password!).subscribe({
      next: () => this.router.navigate(['/login']),
      error: err => alert(err.error?.error || 'Error en registro')
    });
  }
}
