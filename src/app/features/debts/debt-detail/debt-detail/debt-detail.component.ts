import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DebtService } from 'src/app/core/services/debt.service';
import { Debt } from 'src/app/shared/models/debt.model';

@Component({
  selector: 'app-debt-detail',
  templateUrl: './debt-detail.component.html',
  styleUrls: ['./debt-detail.component.scss']
})
export class DebtDetailComponent {
  debt?: Debt;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private debtService: DebtService
  ) {}

   ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.debtService.getDebt(id).subscribe(d => this.debt = d);
  }

  markAsPaid() {
    if (!this.debt || this.debt.status === 'paid') return;

    this.debtService.markAsPaid(this.debt.id).subscribe(updated => this.debt = updated);
  }

  editDebt() {
    this.router.navigate(['/debts', this.debt?.id, 'edit']);
  }

  deleteDebt() {
    if (this.debt) {
      if (confirm('¿Seguro que deseas eliminar esta deuda?')) {
        this.debtService.deleteDebt(this.debt.id).subscribe(() => this.router.navigate(['/debts']));
      }
    }
  }
  
}
