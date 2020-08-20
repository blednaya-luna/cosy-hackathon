import { DAPP } from 'globalConstants';

export const preparePurchaseItemTxData = (id, price) => ({
  type: 16,
  data: {
    fee: {
      tokens: '0.05',
      assetId: 'WAVES',
    },
    dApp: DAPP,
    call: {
      function: 'purchase',
      args: [
        {
          type: 'string',
          value: `item_${id}`,
        },
      ],
    },
    payment: [
      {
        amount: price,
        assetId: 'WAVES',
      },
    ],
  },
});
