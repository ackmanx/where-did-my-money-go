import { PageItemsList } from '../components/PageItemsList'
import { People as PeopleType } from '../money-api-types'

interface Props {
  people: PeopleType[] | undefined
}

export const People = ({ people }: Props) => {
  if (!people) return null

  return (
    <section>
      <h2>People</h2>
      <PageItemsList list={people} />
    </section>
  )
}
