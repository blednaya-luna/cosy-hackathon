import { DAPP } from 'globalConstants';

export const prepareAddItemTxData = (title, price, data) => ({
  type: 16,
  data: {
    fee: {
      tokens: '0.05',
      assetId: 'WAVES',
    },
    dApp: DAPP,
    call: {
      function: 'addItem',
      args: [
        {
          type: 'string',
          value: title,
        },
        {
          type: 'integer',
          value: Number(price * 100000000),
        },
        {
          type: 'string',
          value: JSON.stringify({
            title,
            description: data,
          }),
        },
      ],
    },
    payment: [],
  },
});
