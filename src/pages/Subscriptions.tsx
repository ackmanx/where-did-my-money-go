import { Box, Paper, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

import { Subscription } from '../money-api-types'

interface Props {
  subscriptions: Subscription[] | undefined
}

export const Subscriptions = ({ subscriptions }: Props) => {
  if (!subscriptions) return null

  return (
    <Grid2 container justifyContent='center' spacing={2} data-id='credit-cards-page'>
      {subscriptions.map((subscription) => (
        <Paper key={subscription.name} sx={{ m: 2, p: 2, width: 380 }}>
          <Grid2 container justifyContent='space-between'>
            <Box>
              <Typography variant='h6'>{subscription.name}</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: '#479b5f',
                color: 'white',
                padding: 1,
                borderRadius: '15px',
              }}
            >
              {subscription.amount !== -1 && (
                <Typography>
                  ${subscription.amount}
                  <Box component='span' sx={{ fontSize: 12 }}>
                    /mo
                  </Box>
                </Typography>
              )}
            </Box>
          </Grid2>

          {subscription.notes && (
            <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)', mt: 2, pt: 2 }}>
              <Typography variant='overline'>Notes</Typography>
              <Typography>{subscription.notes}</Typography>
            </Box>
          )}
        </Paper>
      ))}
    </Grid2>
  )
}
