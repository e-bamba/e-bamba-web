import {Balances, Transactions} from "./components";
import {BalanceContainer, TransactionsContainer} from "./styles";
import Page from "../../components/Page";
import {transactions, balances} from "../../mocks";

export default function Home() {
  return (
    <Page style={{paddingTop: "50px"}}>
      <BalanceContainer>
        <Balances balances={balances}/>
      </BalanceContainer>
      <TransactionsContainer>
        <Transactions transactions={transactions} />
      </TransactionsContainer>
    </Page>
  )
}