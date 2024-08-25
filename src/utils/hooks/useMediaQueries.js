import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useMediaQueries = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isXl = useMediaQuery(theme.breakpoints.down('xl'));
  const isMobileLandscape = useMediaQuery(
    '(orientation: landscape) and (max-width: 920px) and (max-height: 600px)',
  );

  return { isXs, isSm, isMd, isLg, isXl, isMobileLandscape };
};
