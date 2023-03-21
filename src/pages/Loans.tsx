import { Box, Paper, Stack, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

import { Loans as LoansType } from '../money-api-types'

interface Props {
  loans: LoansType[] | undefined
}

export const Loans = ({ loans }: Props) => {
  if (!loans) return null

  return (
    <Stack spacing={2}>
      {loans.map((loan) => (
        <Paper key={loan.name} sx={{ p: 2 }}>
          <Grid2 container justifyContent='space-between'>
            <Box>
              <Typography variant='h6'>{loan.name}</Typography>
              <Typography variant='overline'>{loan.bank}</Typography>
              <Typography>{loan.apr}</Typography>
              <Typography>{loan.creditReportName}</Typography>
              <Typography>{loan.website}</Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  backgroundColor: '#479b5f',
                  color: 'white',
                  padding: 1,
                  borderRadius: '15px',
                }}
              >
                <Typography>${loan.amount === -1 ? '??' : loan.amount}</Typography>
              </Box>
            </Box>
          </Grid2>
          <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)', mt: 2, pt: 2 }}>
            <Typography variant='overline'>Notes</Typography>
            <Typography>{loan.notes}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  )
}
