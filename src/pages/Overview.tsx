import { MoneyResponse } from '../money-api-types'
import { formatMoney } from '../utils'

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
        <p key={income.name}>
          {income.name}: {formatMoney(income.amount)}
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
