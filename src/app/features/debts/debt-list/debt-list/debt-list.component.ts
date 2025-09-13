import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { DebtService } from 'src/app/core/services/debt.service';
import { Debt } from 'src/app/shared/models/debt.model';

@Component({
  selector: 'app-debt-list',
  templateUrl: './debt-list.component.html',
  styleUrls: ['./debt-list.component.scss']
})
export class DebtListComponent {
debts: Debt[] = [];
  filter: 'all' | 'pending' | 'paid' = 'all';

  constructor(private debtService: DebtService, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.loadDebts();
  }

  loadDebts() {
    this.debtService.getDebts(this.filter !== 'all' ? this.filter : undefined)
      .subscribe(res => this.debts = res);
  }

  onFilterChange(filter: 'all' | 'pending' | 'paid') {
    this.filter = filter;
    this.loadDebts();
  }

  viewDebt(id: number) {
    this.router.navigate(['/debts', id]);
  }

  newDebt() {
    this.router.navigate(['/debts/new']);
  }

    logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
