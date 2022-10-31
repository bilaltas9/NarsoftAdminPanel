
const DOCUMENT = 'CHOOSE_COMPANY_';

const actions = {
    SELECT_COMPANY: DOCUMENT + 'SELECT',
    selectCompany: data => ({
        type: actions.SELECT_COMPANY,
        payload: { data },
    })
}
export default actions;