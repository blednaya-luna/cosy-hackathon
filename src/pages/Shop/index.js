import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { v4 } from 'uuid';
import { AppLayout } from 'components/AppLayout';
import { Item } from 'pages/Shop/Item';
import { DAPP } from 'globalConstants';
import { log, LOG_TYPE } from 'utils/log';

const mock = Array.from({ length: 15 }, () => v4());

export const Shop = () => {
  useEffect(() => {
    fetch(`https://testnet1.wavesnodes.com/addresses/data/${DAPP}`)
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
      })
      .catch((err) => log(err, LOG_TYPE.error));
  }, []);

  return (
    <AppLayout>
      <Grid container spacing={2} justify="center">
        {mock.map((item) => (
          <Grid key={item} item>
            <Item />
          </Grid>
        ))}
      </Grid>
    </AppLayout>
  );
};
