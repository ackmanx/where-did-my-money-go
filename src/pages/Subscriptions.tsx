import { GithubLink } from '../components/GithubLink'
import { Subscription } from '../money-api-types'

interface Props {
  subscriptions: Subscription[] | undefined
}

export const Subscriptions = ({ subscriptions }: Props) => {
  if (!subscriptions) return null

  return (
    <section>
      <h2>Subscriptions</h2>
      {subscriptions.map((subscription) => (
        <article style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>
              <GithubLink searchTerm={subscription.name} />
            </h3>
            <div style={{ textAlign: 'right' }}>
              ${Number(subscription.amount).toLocaleString()}/mo
            </div>
          </div>

          {subscription.notes && <div>{subscription.notes}</div>}
        </article>
      ))}
    </section>
  )
}
