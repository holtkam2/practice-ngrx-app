export const analytics = (state = {items: 0, widgets: 0, cancelClicks: 0, saveClicks: 0}, {type, payload}) => {
  switch (type) {
    case 'INIT':
      return payload;
    default:
      return state;
  }
};
