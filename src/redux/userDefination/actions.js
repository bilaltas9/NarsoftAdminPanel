
const DOCUMENT = 'USER_DEFINATION_';

const actions = {
    USER_UPDATE: DOCUMENT + 'UPDATE',
    editUser: data => ({
        type: actions.USER_UPDATE,
        payload: { data },
    })
}
export default actions;