import { MoneyResponse } from '../money-api-types'

interface Props {
  moneyData: MoneyResponse
}

export const Overview = ({ moneyData }: Props) => {
  return (
    <div>
      <h2>Overview</h2>
      <p>Income:</p>
      <p>Expenses:</p>
      <p>Monthly Leftovers:</p>

      <h3>Incomes</h3>
      {moneyData.incomes.map((income) => (
        <p>
          {income.name}: ${income.amount.toLocaleString()}
        </p>
      ))}

      <h3>Expenses</h3>
      <p>Loans:</p>
      <p>Subscriptions:</p>
      <p>Credit Cards:</p>
      <p>Utilities:</p>
      <p>Healthcare:</p>
      <p>Misc:</p>
    </div>
  )
}
