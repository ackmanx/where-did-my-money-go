import { CreditCard } from '../money-api-types'

interface Props {
  cards: CreditCard[] | undefined
}

export const CreditCards = ({ cards }: Props) => {
  if (!cards) return null

  // const websitePrettyRegex = /(https?:\/\/(www.)?)/

  return <h1>credit cards</h1>
}
