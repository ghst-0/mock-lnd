import EventEmitter from 'node:events';

const {nextTick} = process;

/** Make an invoice subscription

  {
    invoice: <Invoice Data Object>
  }

  @returns
  <EventEmitter Object>
*/
const makeBlocksSubscription = ({invoice}) => {
  const data = {hash: Buffer.alloc(32), height: 1};
  const emitter = new EventEmitter();

  emitter.cancel = () => {};
  nextTick(() => emitter.emit('data', data));

  return emitter;
};

export { makeBlocksSubscription }
