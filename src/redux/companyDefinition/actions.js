
const DOCUMENT = 'COMPANY_DEFINATION_';

const actions = {
    COMPANY_UPDATE: DOCUMENT + 'UPDATE',
    editCompany: data => ({
        type: actions.COMPANY_UPDATE,
        payload: { data },
    })
}
export default actions;