export enum TransactionType { SELL = "sell", LOAD = "load" }

export type Transaction = { amount: number, createdAt: string, type: string, details?: string }

export type Balance = { amount: number, currency?: string, lastUpdatedAt: string, title: string }
