export const prepareTransferWavesTxData = ({ amount, recipient }) => ({
  type: 4,
  data: {
    amount: {
      assetId: 'WAVES',
      tokens: amount,
    },
    fee: {
      assetId: 'WAVES',
      tokens: '0.001',
    },
    recipient,
  },
});
