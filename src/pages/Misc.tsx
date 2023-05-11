import { PageItemsList } from '../components/PageItemsList'
import { Misc as MiscType } from '../money-api-types'

interface Props {
  misc: MiscType[] | undefined
}

export const Misc = ({ misc }: Props) => {
  if (!misc) return null

  return (
    <section>
      <h2>Misc</h2>
      <PageItemsList list={misc} />
    </section>
  )
}
