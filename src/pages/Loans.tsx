import { SkullDivider } from '../SkullDivider'
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
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h3>{loan.bank}</h3>
                  <div>{loan.name}</div>
                </div>
                <div>
                  <div style={{ textAlign: 'right' }}>
                    ${Number(loan.amount).toLocaleString()}/mo
                  </div>
                  <div style={{ textAlign: 'right' }}>{loan.apr}%</div>
                </div>
              </div>
              {loan.creditReportName && <div>{loan.creditReportName}</div>}
              {loan.website && (
                <div>
                  <a href={loan.website} target='_blank'>
                    {loan.website.replace(websitePrettyRegex, '')}
                  </a>
                </div>
              )}
              {loan.notes && <div>{loan.notes}</div>}
            </div>
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
