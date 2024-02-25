import {BalanceItemContainer, TransactionItemContainer} from "./styles";
import {Tooltip} from "@mui/material";
import ArrowDown from '@mui/icons-material/ArrowDownward';
import {Balance, Transaction, TransactionType} from "../../application/core/domain";
import ArrowUp from "@mui/icons-material/ArrowUpward";
import Line from '@mui/icons-material/HorizontalRule';
import {BalanceItemProps, BalanceProps, TransactionItemProps, TransactionsProps} from "./props";

export const Balances = ({balances}: BalanceProps) => (
  <ul>{balances.map(createBalanceItem)}</ul>
)

const createBalanceItem = (bal: Balance, index: number) => (
  <BalanceItem key={index} balance={bal} />
)
export const BalanceItem = ({balance: {amount, currency, lastUpdatedAt, title}}: BalanceItemProps) => (
  <Tooltip title={`Última atualização: ${lastUpdatedAt}`}>
    <BalanceItemContainer>
      <span>{title}</span><br/>
      <span>{amount}</span>
      <span>{currency ?? "AKZ"}</span><br/>
    </BalanceItemContainer>
  </Tooltip>
)

const chooseTransactionIcon = (type: string) => {
  switch (type) {
    case TransactionType.SELL:
      return <ArrowDown color="error"/>
    case TransactionType.LOAD:
      return <ArrowUp color="success"/>
    default:
      return <Line />
  }
}

const TransactionItem = ({transaction: {details, type, createdAt, amount}}: TransactionItemProps) => (
  <Tooltip title={`Criado em: ${createdAt}`}>
    <TransactionItemContainer>
      <div>
        <span>{chooseTransactionIcon(type)}</span>
        <span>{amount}</span>
      </div>
      <span>{details}</span>
    </TransactionItemContainer>
  </Tooltip>
)

const createTransactionItem = (transaction: Transaction, index: number) => (
  <TransactionItem key={index} transaction={transaction}/>
)

export const Transactions = ({transactions}: TransactionsProps) => (
  <ul>{transactions.map(createTransactionItem)}</ul>
)