import { BaseItem } from '../money-api-types'
import { GithubLink } from './GithubLink'

interface Props {
  list: BaseItem[]
}

export const PageItemsList = ({ list }: Props) => {
  if (!list) return null

  return (
    <ul>
      {list.map((item) => (
        <li key={item.name} style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>
              <GithubLink searchTerm={item.name}>{item.name}</GithubLink>
            </h3>
            {/* @ts-expect-error */}
            {item.amount && (
              // @ts-expect-error
              <div style={{ textAlign: 'right' }}>${Number(item.amount).toLocaleString()}/mo</div>
            )}
          </div>

          {item.notes && <div>{item.notes}</div>}
        </li>
      ))}
    </ul>
  )
}
