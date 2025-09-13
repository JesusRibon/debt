export interface Debt {
  id: number;
  amount: number;
  description: string;
  status: 'pending' | 'paid';
  created_at: string;
}
