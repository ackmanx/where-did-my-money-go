import { TwoColumn, TwoColumnLeft, TwoColumnRight } from '../components/TwoColumn'
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
    <section style={{ border: '1px solid black', padding: '0 16px' }}>
      <h2>Overview</h2>
      <TwoColumn>
        <TwoColumnLeft>Income: {formatMoney(totalIncomes)}</TwoColumnLeft>
        <TwoColumnRight>Expenses: {formatMoney(totalExpenses)}</TwoColumnRight>
      </TwoColumn>
      <div style={{ margin: '16px 0 32px 0' }}>
        <i>Monthly Leftovers: {formatMoney(totalIncomes - totalExpenses)}</i>
      </div>

      <TwoColumn>
        <TwoColumnLeft>
          <h3>Incomes</h3>
          {moneyData.incomes.map((income) => (
            <p key={income.name}>
              {income.name}: {formatMoney(income.amount)}
            </p>
          ))}
          <p>
            <i>Total: {formatMoney(totalIncomes)}</i>
          </p>
        </TwoColumnLeft>
        <TwoColumnRight>
          <h3>Expenses</h3>
          <p>Loans: {formatMoney(loans)}</p>
          <p>Misc: {formatMoney(misc)}</p>
          <p>Utilities: {formatMoney(utilities)}</p>
          <p>Healthcare: {formatMoney(healthcare)}</p>
          <p>Subscriptions: {formatMoney(subscriptions)}</p>
          <p>
            <i>Total: {formatMoney(totalExpenses)}</i>
          </p>
        </TwoColumnRight>
      </TwoColumn>
    </section>
  )
}
