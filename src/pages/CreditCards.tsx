import { PageItemsList } from '../components/PageItemsList'
import { CreditCard } from '../money-api-types'

interface Props {
  cards: CreditCard[] | undefined
}

export const CreditCards = ({ cards }: Props) => {
  if (!cards) return null

  return (
    <section>
      <h2>Credit Cards</h2>
      <PageItemsList list={cards} />
    </section>
  )
}
