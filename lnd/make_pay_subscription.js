import EventEmitter from 'node:events';
import makePaymentData from './../data/make_payment_data.js';

const {nextTick} = process;

/** Make a payment subscription

  {
    [payment]: <Payment Data Object>
  }

  @returns
  <EventEmitter Object>
*/
export default ({payment}) => {
  const data = makePaymentData({});
  const emitter = new EventEmitter();

  nextTick(() => emitter.emit('data', payment || data));

  return emitter;
};
