import { CreditCard } from '../money-api-types'

interface Props {
  cards: CreditCard[] | undefined
}

export const CreditCards = ({ cards }: Props) => {
  return <h1>hello credit cards {cards?.length}</h1>
}
