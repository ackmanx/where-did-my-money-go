import { Loan } from '../money-api-types'
import SkullDivider from '../skull-divider.png'

interface Props {
  loans: Loan[] | undefined
}

export const Loans = ({ loans }: Props) => {
  if (!loans) return null

  const websitePrettyRegex = /(https?:\/\/(www.)?)/

  console.log(777, loans)

  return (
    <section>
      <h2>Loans</h2>
      {loans.map((loan) => {
        return (
          <article>
            <h3>{loan.bank}</h3>
            <p>{loan.name}</p>
            <p>{loan.amount}/mo</p>
            <p>{loan.apr}%</p>
            <p>{loan.creditReportName}</p>
            <p>
              <a href={loan.website} target='_blank'>
                {loan.website.replace(websitePrettyRegex, '')}
              </a>
            </p>
            <p>{loan.notes}</p>
            <div style={{ textAlign: 'center' }}>
              <img src={SkullDivider} style={{ width: '18px' }} alt={'divider'} />
              <img src={SkullDivider} style={{ width: '18px' }} alt={'divider'} />
              <img src={SkullDivider} style={{ width: '18px' }} alt={'divider'} />
            </div>
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
