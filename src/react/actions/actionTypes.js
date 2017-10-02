/**
* Convert list of strings and map them to constants.
*/
const createTypes = (...args) => args.reduce((obj, item) => ({ ...obj, [item]: item }), {});

export default createTypes(
  'LOAD_CONFIG',
  'GET_ENTRIES',
  'GET_ENTRIES_SUCCESS',
  'GET_ENTRIES_FAILED',
  'START_POLLING',
  'POLLING_SUCCESS',
  'POLLING_FAILED',
  'CANCEL_POLLING',
  'CREATE_ENTRY',
  'CREATE_ENTRY_SUCCESS',
  'CREATE_ENTRY_FAILED',
  'EXAMINE_POLLING_SUCCESS',
  'EXAMINE_POLLING_FAILED',
  'DELETE_ENTRY',
  'DELETE_ENTRY_SUCCESS',
  'DELETE_ENTRY_FAILED',
  'UPDATE_ENTRY',
  'UPDATE_ENTRY_SUCCESS',
  'UPDATE_ENTRY_FAILED',
  'ENTRY_EDIT_OPEN',
  'ENTRY_EDIT_CLOSE',
);
