import actions from './actions';

const initState = {
  currentCompany: {}
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.SELECT_COMPANY:
      return {
        ...state,
        currentCompany : payload.data
      };
    default:
      return state;
  }
}
