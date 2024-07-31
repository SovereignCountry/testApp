import LinearProgress from '@mui/material/LinearProgress';
import * as React from 'react';
import custom_values from '../custom_values';

const ProgressBar = ({
  current,
  step,
  progress,
}: {
  current: number;
  step: number;
  progress: number;
}) => {
  let value = 0;
  if (current + 1 === step) {
    value = progress;
  } else if (current >= step) {
    value = 100;
  }

  return (
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        '&.MuiLinearProgress-root': {
          backgroundColor: custom_values.colors.g_0,
          opacity: 1,
          flex: '1 1 auto',
          position: 'absolute',
          top: '50%',
          left: 'calc(-50% + 20px)',
          right: 'calc(50% + 20px)',
          transform: 'translateY(-50%)',
        },
      }}
    />
  );
};

export default ProgressBar;
