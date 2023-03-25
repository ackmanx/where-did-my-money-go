import { Box, Paper, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

import { CreditCard } from '../money-api-types'

interface Props {
  cards: CreditCard[] | undefined
}

export const CreditCards = ({ cards }: Props) => {
  if (!cards) return null

  const websitePrettyRegex = /(https?:\/\/(www.)?)/

  return (
    <Grid2 container justifyContent='center' spacing={2} data-id='credit-cards-page'>
      {cards.map((card) => (
        <Paper key={card.name} sx={{ m: 2, p: 2, width: 380 }}>
          <Grid2 container justifyContent='space-between'>
            <Box>
              <Typography variant='h6'>{card.name}</Typography>
              <Grid2 container gap={3}>
                <Box sx={{ width: '300px' }}>
                  <Typography>
                    <a href={card.website}>{card.website.replace(websitePrettyRegex, '')}</a>
                  </Typography>
                </Box>
                {card.creditReportName && (
                  <Box sx={{ mb: 1 }}>
                    <Typography variant='overline'>Credit Report Name</Typography>
                    <Typography>{card.creditReportName}</Typography>
                  </Box>
                )}
              </Grid2>
            </Box>
          </Grid2>

          {card.notes && (
            <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)', mt: 2, pt: 2 }}>
              <Typography variant='overline'>Notes</Typography>
              <Typography>{card.notes}</Typography>
            </Box>
          )}
        </Paper>
      ))}
    </Grid2>
  )
}
