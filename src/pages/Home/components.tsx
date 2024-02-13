import {BalanceItemContainer} from "./styles";

export type BalanceItemProps = {
  amount: number;
  currency?: string;
  lastUpdatedAt: string;
  title: string;
}
export const BalanceItem = ({amount, currency, lastUpdatedAt, title}: BalanceItemProps) => (
  <BalanceItemContainer>
    <span>{title}</span><br/>
    <span>{amount}</span>
    <span>{currency ?? "AKZ"}</span><br/>
    <span>{lastUpdatedAt}</span>
  </BalanceItemContainer>
)