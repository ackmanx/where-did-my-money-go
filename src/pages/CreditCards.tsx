import { GithubLink } from '../components/GithubLink'
import { SkullDivider } from '../components/SkullDivider'
import { CreditCard } from '../money-api-types'

interface Props {
  cards: CreditCard[] | undefined
}

export const CreditCards = ({ cards }: Props) => {
  if (!cards) return null

  const websitePrettyRegex = /(https?:\/\/(www.)?)/

  return (
    <section>
      <h2>Credit Cards</h2>
      {cards.map((card) => (
        <article>
          <h3>
            <GithubLink searchTerm={card.name} />
          </h3>
          {card.website && (
            <div>
              <a href={card.website} target='_blank'>
                {card.website.replace(websitePrettyRegex, '')}
              </a>
            </div>
          )}

          {(card.notes || card.creditReportName) && (
            <div>
              <h4>Notes</h4>
              {card.creditReportName && <div>Credit Report: {card.creditReportName}</div>}
              {card.notes && <div>{card.notes}</div>}
            </div>
          )}

          <SkullDivider />
        </article>
      ))}
    </section>
  )
}
