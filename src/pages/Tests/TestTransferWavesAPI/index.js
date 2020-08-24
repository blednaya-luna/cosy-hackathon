import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useStyles } from 'pages/Tests/TestTransferWavesAPI/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { log, LOG_TYPE } from 'utils/log';
import { prepareTransferWavesTxData } from 'pages/Tests/TestTransferWavesAPI/utils/prepareTransferWavesTxData';

export const TestTransferWavesAPI = () => {
  const classes = useStyles();

  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState(1);

  const testTransferWavesAPI = () => {
    const { WavesKeeper } = window;
    const txData = prepareTransferWavesTxData({ amount, recipient });
    WavesKeeper
      .signAndPublishTransaction(txData)
      .catch((error) => log(error, LOG_TYPE.error));
  };

  return (
    <Paper className={classes.container}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="overline">
            test transfer waves API
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            label="Recipient"
            variant="outlined"
            onChange={({ target: { value } }) => setRecipient(value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Amount (WAVES)"
            variant="outlined"
            type="number"
            value={amount}
            onChange={({ target: { value } }) => setAmount(value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="inherit"
            onClick={testTransferWavesAPI}
          >
            transfer WAVES
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
