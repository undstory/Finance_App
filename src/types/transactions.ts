export type Transaction = {
  avatarUrl: string | undefined;
  date: string;
  amount: number;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  accountId: string;
  payee: string;
  category: string | null;
  recurring: boolean;
  description: string | null;
};

export type SortByType =
  | "Latest"
  | "Oldest"
  | "A to Z"
  | "Z to A"
  | "Highest"
  | "Lowest";

export type CategoryType =
  | "All transactions"
  | "Entertainment"
  | "Bills"
  | "Groceries"
  | "Dining Out"
  | "Transportation"
  | "Personal Care"
  | "Education"
  | "Lifestyle"
  | "Shopping"
  | "General";
