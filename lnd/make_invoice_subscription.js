import EventEmitter from 'node:events';
import makeInvoice from './../data/make_invoice.js';

const {nextTick} = process;

/** Make an invoice subscription

  {
    invoice: <Invoice Data Object>
  }

  @returns
  <EventEmitter Object>
*/
export default ({invoice}) => {
  const data = makeInvoice({});
  const emitter = new EventEmitter();

  emitter.cancel = () => {};

  nextTick(() => {
    setTimeout(() => {
      return emitter.emit('data', invoice || data)
    },
    10);
  });

  return emitter;
};
