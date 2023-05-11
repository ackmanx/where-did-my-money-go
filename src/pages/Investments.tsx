import { PageItemsList } from '../components/PageItemsList'
import { Investment } from '../money-api-types'

interface Props {
  investments: Investment[] | undefined
}

export const Investments = ({ investments }: Props) => {
  if (!investments) return null

  return (
    <section>
      <h2>Investments</h2>
      <PageItemsList list={investments} />
    </section>
  )
}
