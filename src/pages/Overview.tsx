import { MoneyResponse } from '../money-api-types'
import { formatMoney, sumAmounts } from '../utils'

interface Props {
  moneyData: MoneyResponse
}

export const Overview = ({ moneyData }: Props) => {
  const loans = sumAmounts(moneyData.loans)
  const subscriptions = sumAmounts(moneyData.subscriptions)
  const utilities = sumAmounts(moneyData.utilities)
  const healthcare = sumAmounts(moneyData.healthcare)
  const misc = sumAmounts(moneyData.misc)

  const totalIncomes = sumAmounts(moneyData.incomes)
  const totalExpenses = loans + subscriptions + utilities + healthcare + misc

  return (
    <div>
      <h2>Overview</h2>
      <div>
        <p>Income: {formatMoney(totalIncomes)}</p>
        <p>Expenses: {formatMoney(totalExpenses)}</p>
        <p>
          <i>Monthly Leftovers: {formatMoney(totalIncomes - totalExpenses)}</i>
        </p>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <h3>Incomes</h3>
          {moneyData.incomes.map((income) => (
            <p key={income.name}>
              {income.name}: {formatMoney(income.amount)}
            </p>
          ))}
          <p>
            <i>Total: {formatMoney(totalIncomes)}</i>
          </p>
        </div>

        <div>
          <h3>Expenses</h3>
          <p>Loans: {formatMoney(loans)}</p>
          <p>Misc: {formatMoney(misc)}</p>
          <p>Utilities: {formatMoney(utilities)}</p>
          <p>Healthcare: {formatMoney(healthcare)}</p>
          <p>Subscriptions: {formatMoney(subscriptions)}</p>
          <p>
            <i>Total: {formatMoney(totalExpenses)}</i>
          </p>
        </div>
      </div>
    </div>
  )
}
