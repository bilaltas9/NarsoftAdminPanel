import actions from './actions';

const initState = {
  isLoading: false,
  errorMessage: false,
  editUnit: {}
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.UNIT_UPDATE:
      return {
        ...state,
        editUnit : payload.data
      };
    default:
      return state;
  }
}
