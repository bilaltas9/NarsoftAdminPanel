import actions from './actions';

const initState = {
  isLoading: false,
  errorMessage: false,
  editUser: {}
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.USER_UPDATE:
      return {
        ...state,
        editUser : payload.data
      };
    default:
      return state;
  }
}
