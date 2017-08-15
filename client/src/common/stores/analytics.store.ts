export const analytics = (state = {clicks: 0}, {type, payload}) => {
  switch (type) {
    case 'CLICK':
      state.clicks++;
      console.log(state);
      return state;
    default:
      return state;
  }
};
