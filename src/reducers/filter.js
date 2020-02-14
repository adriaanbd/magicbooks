const DEFAULT_STATE = 'All';

function filter(state = DEFAULT_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_FILTER':
      return payload;
    default:
      return state;
  }
}

export default filter;
