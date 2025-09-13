import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Debt } from 'src/app/shared/models/debt.model';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

constructor(private api: ApiService) {}

getDebts(status?: string): Observable<Debt[]> {
    const query = status ? `?status=${status}` : '';
    return this.api.get<Debt[]>(`/debts${query}`);
  }

  getDebt(id: number): Observable<Debt> {
    return this.api.get<Debt>(`/debts/${id}`);
  }

  createDebt(data: Partial<Debt>): Observable<Debt> {
    return this.api.post<Debt>('/debts', data);
  }

  updateDebt(id: number, data: Partial<Debt>): Observable<Debt> {
    return this.api.put<Debt>(`/debts/${id}`, data);
  }

  deleteDebt(id: number): Observable<any> {
    return this.api.delete(`/debts/${id}`);
  }

  markAsPaid(id: number): Observable<Debt> {
    return this.api.patch<Debt>(`/debts/${id}/pay`);
  }

}
