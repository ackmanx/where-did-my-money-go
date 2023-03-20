import { Loans as LoansType } from '../money-api-types'

interface Props {
  loans: LoansType[] | undefined
}

export const Loans = ({ loans }: Props) => {
  return <h1>hello loans {loans?.length}</h1>
}
