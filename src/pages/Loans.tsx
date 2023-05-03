import { PageItemsList } from '../components/PageItemsList'
import { Loan } from '../money-api-types'

interface Props {
  loans: Loan[] | undefined
}

export const Loans = ({ loans }: Props) => {
  if (!loans) return null

  return (
    <section>
      <h2>Loans</h2>
      <PageItemsList list={loans} />
    </section>
  )
}
