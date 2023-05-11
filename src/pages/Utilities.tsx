import { PageItemsList } from '../components/PageItemsList'
import { Utility } from '../money-api-types'

interface Props {
  utilities: Utility[] | undefined
}

export const Utilities = ({ utilities }: Props) => {
  if (!utilities) return null

  return (
    <section>
      <h2>Utilities</h2>
      <PageItemsList list={utilities} />
    </section>
  )
}
