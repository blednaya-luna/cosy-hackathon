import React from 'react';
import { AppLayout } from 'components/AppLayout';

import { TestAddItemAPI } from 'pages/Tests/TestAddItemAPI';
import { TestTransferWavesAPI } from 'pages/Tests/TestTransferWavesAPI';
import Grid from '@material-ui/core/Grid';

export const Tests = () => (
  <AppLayout>
    <Grid container spacing={2}>
      <Grid item>
        <TestAddItemAPI />
      </Grid>
      <Grid item>
        <TestTransferWavesAPI />
      </Grid>
    </Grid>
  </AppLayout>
);
