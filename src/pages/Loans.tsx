import { Box, Paper, Stack, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

import { Loan } from '../money-api-types'

interface Props {
  loans: Loan[] | undefined
}

export const Loans = ({ loans }: Props) => {
  if (!loans) return null

  const websitePrettyRegex = /(https?:\/\/(www.)?)/

  return (
    <Stack spacing={2} data-id='loans-page'>
      {loans.map((loan) => (
        <Paper key={loan.name} sx={{ p: 2 }}>
          <Grid2 container justifyContent='space-between'>
            <Box>
              <Typography variant='h6'>{loan.name}</Typography>
              <Grid2 container gap={3}>
                <Box sx={{ width: '300px' }}>
                  <Typography variant='overline'>Bank</Typography>
                  <Typography>{loan.bank}</Typography>
                  <Typography>
                    <a href={loan.website}>{loan.website.replace(websitePrettyRegex, '')}</a>
                  </Typography>
                </Box>
                {loan.creditReportName && (
                  <Box sx={{ mb: 1 }}>
                    <Typography variant='overline'>Credit Report Name</Typography>
                    <Typography>{loan.creditReportName}</Typography>
                  </Box>
                )}
              </Grid2>
            </Box>

            <Grid2 container flexDirection='column' alignItems='center'>
              <Box
                sx={{
                  backgroundColor: '#479b5f',
                  color: 'white',
                  padding: 1,
                  borderRadius: '15px',
                }}
              >
                {loan.amount !== -1 && (
                  <Typography>
                    ${loan.amount}
                    <Box component='span' sx={{ fontSize: 12 }}>
                      /mo
                    </Box>
                  </Typography>
                )}
              </Box>
              {loan.apr !== -1 && (
                <Typography sx={{ fontSize: 14, pt: 0.5 }}>{loan.apr}%</Typography>
              )}
            </Grid2>
          </Grid2>

          {loan.notes && (
            <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)', mt: 2, pt: 2 }}>
              <Typography variant='overline'>Notes</Typography>
              <Typography>{loan.notes}</Typography>
            </Box>
          )}
        </Paper>
      ))}
    </Stack>
  )
}
