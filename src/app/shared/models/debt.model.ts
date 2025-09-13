export interface Debt {
  id: number;
  amount: number | null;
  description: string | null;
  status: 'pending' | 'paid';
  created_at: string;
}
