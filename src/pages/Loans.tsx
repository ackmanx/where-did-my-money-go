import { Loan } from '../money-api-types'

interface Props {
  loans: Loan[] | undefined
}

export const Loans = ({ loans }: Props) => {
  if (!loans) return null

  // const websitePrettyRegex = /(https?:\/\/(www.)?)/

  return <h1>loans</h1>
}
