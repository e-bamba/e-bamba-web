import styled from "@emotion/styled";

export const BalanceContainer = styled.div`
  ul {
    border-radius: 15px;
    background-color: #9f63aa;
    display: flex;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-height: 50px;
  }
`

export const BalanceItemContainer = styled.li`
  max-height: 40px;
  height: 40px;
  max-width: 200px;
  width: 200px;
  background-color: #bb00ff;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  border-radius: 15px;
`

export const TransactionsContainer =  styled.div`
  margin-top: 40px;
`

export const TransactionItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  
  div {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`