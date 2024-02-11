import {BalanceItem, BalanceItemProps} from "./components";
import {BalanceContainer} from "./styles";
import Page from "../../components/Page";

export default function Home() {
  const balances = [
    {
      title: "Saldo 30",
      amount: 20000,
      lastUpdatedAt: "2024-01-03"
    },
    {
      title: "Saldo Belanova",
      amount: 0,
      lastUpdatedAt: "2024-01-03"
    },
    {
      title: "Saldo César",
      amount: 0,
      lastUpdatedAt: "2024-01-03"
    }
  ]
  return (
    <Page style={{paddingTop: "50px"}}>
      <BalanceContainer>
        {balances.map(createBalanceItem)}
      </BalanceContainer>
    </Page>
  )
}

const createBalanceItem = (bal: BalanceItemProps) => (
  <BalanceItem {...bal} />
)