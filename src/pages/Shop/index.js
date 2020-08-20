import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { AppLayout } from 'components/AppLayout';
import { Item } from 'pages/Shop/Item';
import { DAPP } from 'globalConstants';
import { log, LOG_TYPE } from 'utils/log';
import { parseItemsResponse } from 'pages/Shop/utils/parseItemsResponse';
import { useStyles } from 'pages/Shop/styles';

export const Shop = () => {
  const classes = useStyles();

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://testnet1.wavesnodes.com/addresses/data/${DAPP}`)
      .then((res) => res.json())
      .then((res) => setItems(parseItemsResponse(res)))
      .catch((err) => log(err, LOG_TYPE.error));
  }, []);

  return (
    <AppLayout>
      <Grid container spacing={2} justify="center">
        {items.map(({
          id, title, description, price,
        }) => (
          <Grid key={id} item className={classes.item}>
            <Item
              title={title}
              description={description}
              price={price}
            />
          </Grid>
        ))}
      </Grid>
    </AppLayout>
  );
};
