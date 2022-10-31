
const DOCUMENT = 'ROLE_DEFINATION_';

const actions = {
    ROLE_UPDATE: DOCUMENT + 'UPDATE',
    editRole: data => ({
        type: actions.ROLE_UPDATE,
        payload: { data },
    })
}
export default actions;