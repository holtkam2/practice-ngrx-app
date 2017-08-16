export const analytics = (state = {clicks: 0}, {type, payload}) => {
  switch (type) {
    case 'CLICK':
      state.clicks++;
      return state;
    default:
      return state;
  }
};
