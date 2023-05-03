import { GithubLink } from '../components/GithubLink'
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
              <GithubLink searchTerm='incomes'>
                {income.name}: {formatMoney(income.amount)}
              </GithubLink>
            </p>
          ))}
          <p>
            <i>Total: {formatMoney(totalIncomes)}</i>
          </p>
        </TwoColumnLeft>
        <TwoColumnRight>
          <h3>Expenses</h3>
          <p>
            <GithubLink searchTerm='loans'>Loans: {formatMoney(loans)}</GithubLink>
          </p>
          <p>
            <GithubLink searchTerm='misc'>Misc: {formatMoney(misc)}</GithubLink>
          </p>
          <p>
            <GithubLink searchTerm='utilities'>Utilities: {formatMoney(utilities)}</GithubLink>
          </p>
          <p>
            <GithubLink searchTerm='healthcare'>Healthcare: {formatMoney(healthcare)}</GithubLink>
          </p>
          <p>
            <GithubLink searchTerm='subscriptions'>
              Subscriptions: {formatMoney(subscriptions)}
            </GithubLink>
          </p>
          <p>
            <i>Total: {formatMoney(totalExpenses)}</i>
          </p>
        </TwoColumnRight>
      </TwoColumn>
    </section>
  )
}
