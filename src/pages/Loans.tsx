import { SkullDivider } from '../components/SkullDivider'
import { TwoColumn, TwoColumnLeft, TwoColumnRight } from '../components/TwoColumn'
import { Loan } from '../money-api-types'

interface Props {
  loans: Loan[] | undefined
}

function generateGithubLink(bank: string) {
  return `https://github.com/search?q=repo%3Aackmanx%2Fackmanx.github.io+${encodeURI(
    bank
  )}&type=code}`
}

export const Loans = ({ loans }: Props) => {
  if (!loans) return null

  const websitePrettyRegex = /(https?:\/\/(www.)?)/

  return (
    <section>
      <h2>Loans</h2>
      {loans.map((loan) => (
        <article>
          <h3>
            <a href={generateGithubLink(loan.bank)} style={{ textDecoration: 'none' }}>
              {loan.bank}
            </a>
          </h3>
          <TwoColumn>
            <TwoColumnLeft isWide>
              <div>
                <div>{loan.name}</div>
              </div>
              {loan.website && (
                <div>
                  <a href={loan.website} target='_blank'>
                    {loan.website.replace(websitePrettyRegex, '')}
                  </a>
                </div>
              )}
            </TwoColumnLeft>
            <TwoColumnRight>
              <div style={{ textAlign: 'right' }}>${Number(loan.amount).toLocaleString()}/mo</div>
              <div style={{ textAlign: 'right' }}>{loan.apr}%</div>
            </TwoColumnRight>
          </TwoColumn>

          {(loan.notes || loan.creditReportName) && (
            <div>
              <h4>Notes</h4>
              {loan.creditReportName && <div>Credit Report: {loan.creditReportName}</div>}
              {loan.notes && <div>{loan.notes}</div>}
            </div>
          )}

          <SkullDivider />
        </article>
      ))}
    </section>
  )
}
