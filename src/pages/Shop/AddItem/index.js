import React from 'react';
import { log, LOG_TYPE } from 'utils/log';
import Button from '@material-ui/core/Button';
import { prepareAddItemTxData } from 'pages/Shop/utils/prepareAddItemTxData';

// TODO WIP
export const AddItem = () => {
  const addItem = () => {
    const title = 'title';
    const price = 1;
    const data = 'some data';

    const txData = prepareAddItemTxData(title, price, data);
    const { WavesKeeper } = window;
    WavesKeeper
      .signAndPublishTransaction(txData)
      .then((res) => {
        log(res);
      })
      .catch((error) => log(error, LOG_TYPE.error));
  };

  return (
    <Button onClick={addItem}>
      +
    </Button>
  );
};
