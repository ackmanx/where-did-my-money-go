import { Income, Loan, Misc, Subscription, Utility } from '../money-api-types'

interface Props {
  incomes: Income[]
  loans: Loan[]
  subscriptions: Subscription[]
  utilities: Utility[]
  misc: Misc[]
}

export const Overview = ({}: Props) => {
  return <div>something overview</div>
}
