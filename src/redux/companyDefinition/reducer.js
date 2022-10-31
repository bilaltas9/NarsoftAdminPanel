import actions from './actions';

const initState = {
  isLoading: false,
  errorMessage: false,
  editCompany: {}
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.COMPANY_UPDATE:
      return {
        ...state,
        editCompany : payload.data
      };
    default:
      return state;
  }
}
