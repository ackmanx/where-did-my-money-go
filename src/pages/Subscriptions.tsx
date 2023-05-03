import { PageItemsList } from '../components/PageItemsList'
import { Subscription } from '../money-api-types'

interface Props {
  subscriptions: Subscription[] | undefined
}

export const Subscriptions = ({ subscriptions }: Props) => {
  if (!subscriptions) return null

  return (
    <section>
      <h2>Subscriptions</h2>
      <PageItemsList list={subscriptions} />
    </section>
  )
}
