import actions from './actions';

const initState = {
  isLoading: false,
  errorMessage: false,
  editRole: {}
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.ROLE_UPDATE:
      return {
        ...state,
        editRole : payload.data
      };
    default:
      return state;
  }
}
