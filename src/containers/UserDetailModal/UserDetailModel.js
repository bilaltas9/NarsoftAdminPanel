import React from 'react';
import Modals from '@iso/components/Feedback/Modal';
import ModalStyle, { ModalContent } from '../Feedback/Modal/Modal.styles';
import WithDirection from '@iso/lib/helpers/rtl';
import { Button } from 'antd';

const isoModal = ModalStyle(Modals);
const Modal = WithDirection(isoModal);

function UserDetailModal(props) {

    const { visibility } = props;

    const [state, setState] = React.useState({
        loading: false,
        visible: visibility,
    });

    
    
    // setState({ visible: visibility });

    const handleOk = () => {
        setState({ loading: true });
        setTimeout(() => {
            setState({ loading: false, visible: false });
        }, 2000);
    };
    const handleCancel = () => {
        setState({ visible: false });
    };

    return (
        <Modal
            visible={state.visible}
            title="Title"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" size="large" onClick={handleCancel}>
                    Return
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    size="large"
                    loading={state.loading}
                    onClick={handleOk}
                >
                    Submit
                </Button>,
            ]}
        >
            <p>
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia, there live the blind texts.
                Separated they live in Bookmarksgrove right at the coast of
                the Semantics, a large language ocean.
            </p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default UserDetailModal