import { CircularProgress, Box } from '@mui/material';

export function Loading() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress />
    </Box>
  );
}
