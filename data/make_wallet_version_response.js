/** Make a response for getVersion

  {
    [hash]: <Override Commit Hash Hex String>
  }

  @returns
  <GetVersion Response Object>
*/
export default ({hash}) => {
  return {
    app_minor: 1,
    app_patch: 1,
    build_tags: ['autopilotrpc'],
    commit_hash: hash || Buffer.alloc(20).toString('hex'),
  };
};
