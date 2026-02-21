/** Make a response for pending channels

  {}

  @returns
  <PendingChannels Response Object>
*/
export default ({}) => {
  return {
    pending_force_closing_channels: [],
    pending_open_channels: [],
    waiting_close_channels: [],
  };
};
