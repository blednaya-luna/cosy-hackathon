import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import React, { useState } from 'react';
import { v4 } from 'uuid';
import { prepareAddItemTxData } from 'pages/Tests/TestAddItemAPI/utils/prepareAddItemTxData';
import { log, LOG_TYPE } from 'utils/log';
import { useStyles } from 'pages/Tests/TestAddItemAPI/styles';

export const TestAddItemAPI = () => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(1);

  const testAddItemAPI = () => {
    const id = v4();
    const data = {
      id,
      price,
      title,
      description,
    };

    const txData = prepareAddItemTxData({ id, price, data });
    const { WavesKeeper } = window;
    WavesKeeper
      .signAndPublishTransaction(txData)
      .catch((error) => log(error, LOG_TYPE.error));
  };

  return (
    <Paper className={classes.container}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="overline">
            test add item API
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            label="Title"
            variant="outlined"
            onChange={({ target: { value } }) => setTitle(value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Description"
            variant="outlined"
            onChange={({ target: { value } }) => setDescription(value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Price (WAVES)"
            variant="outlined"
            type="number"
            value={price}
            onChange={({ target: { value } }) => setPrice(value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="inherit"
            onClick={testAddItemAPI}
          >
            add item
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
