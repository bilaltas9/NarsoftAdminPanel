
const DOCUMENT = 'UNIT_DEFINATION_';

const actions = {
    UNIT_UPDATE: DOCUMENT + 'UPDATE',
    editUnit: data => ({
        type: actions.UNIT_UPDATE,
        payload: { data },
    })
}
export default actions;