import { Subscription } from '../money-api-types'

interface Props {
  subscriptions: Subscription[] | undefined
}

export const Subscriptions = ({ subscriptions }: Props) => {
  if (!subscriptions) return null

  return <h1>subs</h1>
}
