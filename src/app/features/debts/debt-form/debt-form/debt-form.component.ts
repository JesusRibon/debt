import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DebtService } from 'src/app/core/services/debt.service';

@Component({
  selector: 'app-debt-form',
  templateUrl: './debt-form.component.html',
  styleUrls: ['./debt-form.component.scss']
})
export class DebtFormComponent {
  form = this.fb.group({
    amount: [0, [Validators.required, Validators.min(1)]],
    description: ['']
  });
  editing = false;
  debtId?: number;

    constructor(
    private fb: FormBuilder,
    private debtService: DebtService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.debtId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.debtId) {
      this.editing = true;
      this.debtService.getDebt(this.debtId).subscribe(d => this.form.patchValue(d));
    }
  }

  submit() {
    if (this.form.invalid) return;

    const data = this.form.value;

    if (this.editing && this.debtId) {
      this.debtService.updateDebt(this.debtId, data).subscribe({
        next: () => this.router.navigate(['/debts']),
        error: err => alert(err.error?.error || 'Error al actualizar deuda')
      });
    } else {
      this.debtService.createDebt(data).subscribe({
        next: () => this.router.navigate(['/debts']),
        error: err => alert(err.error?.error || 'Error al crear deuda')
      });
    }
  }
}
