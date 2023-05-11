import { PageItemsList } from '../components/PageItemsList'
import { Healthcare as HealthcareType } from '../money-api-types'

interface Props {
  healthcare: HealthcareType[] | undefined
}

export const Healthcare = ({ healthcare }: Props) => {
  if (!healthcare) return null

  return (
    <section>
      <h2>Healthcare</h2>
      <PageItemsList list={healthcare} />
    </section>
  )
}
