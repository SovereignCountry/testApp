'use client';
import { createTheme } from '@mui/material/styles';
import typography from './typography';
import palette from './palette';
import breakpoints from './breakpoints';
import {
  MuiButton,
  MuiPaper,
  MuiLinearProgress,
  MuiList,
  MuiListItem,
  MuiLink,
} from './components';

export const theme = createTheme({
  typography,
  palette,
  components: {
    MuiButton,
    MuiPaper,
    MuiLinearProgress,
    MuiList,
    MuiListItem,
    MuiLink,
  },
  breakpoints,
});
