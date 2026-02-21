/** Make a response for get transactions

  {}

  @returns
  <GetTransactions Response Object>
*/
export default ({}) => {
  return {
    transactions: [{
      amount: '1',
      block_hash: Buffer.alloc(32).toString('hex'),
      block_height: 1,
      dest_addresses: ['mk2QpYatsKicvFVuTAQLBryyccRXMUaGHP'],
      num_confirmations: 1,
      previous_outpoints: [],
      time_stamp: '1',
      total_fees: '1',
      tx_hash: Buffer.alloc(32).toString('hex'),
    }],
  };
};
