import {Balance, Transaction} from "../../application/core/domain";

export type BalanceItemProps = {
  balance: Balance
}

export type BalanceProps = {
  balances: Array<Balance>
}

export type TransactionsProps = {
  transactions: Array<Transaction>
}

export type TransactionItemProps = {
  transaction: Transaction
}