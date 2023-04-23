import { SkullDivider } from '../SkullDivider'
import { TwoColumn, TwoColumnLeft, TwoColumnRight } from '../TwoColumn'
import { Loan } from '../money-api-types'

interface Props {
  loans: Loan[] | undefined
}

export const Loans = ({ loans }: Props) => {
  if (!loans) return null

  const websitePrettyRegex = /(https?:\/\/(www.)?)/

  return (
    <section>
      <h2>Loans</h2>
      {loans.map((loan) => {
        return (
          <article>
            <h3>{loan.bank}</h3>
            <TwoColumn>
              <TwoColumnLeft isWide>
                <div>
                  <div>{loan.name}</div>
                </div>
                {loan.creditReportName && <div>{loan.creditReportName}</div>}
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

            {loan.notes && (
              <div>
                <h4>Notes</h4>
                <div>{loan.notes}</div>
              </div>
            )}

            <SkullDivider />
          </article>
        )
      })}
    </section>
  )
}

/*
 {
    "name": "Grouse St Bathroom Remodel",
    "bank": "GreenSky",
    "amount": 85,
    "apr": 4.99,
    "creditReportName": "",
    "website": "http://www.greenskyonline.com",
    "notes": "Through Your Home Improvement company"
}
 */
