import React, { useState } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import { Select } from 'antd';
import ContentHolder from '@iso/components/utility/contentHolder';
import { Checkbox } from 'antd';
import Modals from '@iso/components/Feedback/Modal';
import ModalStyle, { ModalContent } from '../../Feedback/Modal/Modal.styles';
import WithDirection from '@iso/lib/helpers/rtl';
import { Button } from 'antd';

const isoModal = ModalStyle(Modals);
const Modal = WithDirection(isoModal);

const { Option } = Select;

let checkbox = {
    narsoftbursa: true,
    narsoftankara: false,
    narsoftistanbul: false
}

const onSearch = (value) => {
    console.log('search:', value);
};

const onChangeCheckbox = (checkedValues) => {
    console.log('checked = ', checkedValues);

};

export default function UserAuthorizationDefinations() {
    const [checked, setChecked] = useState(checkbox);
    // const [checked2, setChecked2] = useState(true);
    const [checksVisible, setchecksVisible] = useState(false);

    const [modalState, setModalState] = useState({
        loading: false,
        visible: false,
    });

    const onChange = (value) => {
        console.log(`selected ${value}`);
        setchecksVisible(true);
    };

    const onChangeCheckboxNarsoftBursa = (checkedValues) => {
        console.log('checked = ', checkedValues);
        checked.narsoftbursa = checkedValues.target.checked;
        console.log(checked);
        setChecked(checked);
        setModalState({ visible: true });
        // setChecked2(checked);
    };

    const onChangeCheckboxNarsoftAnkara = (checkedValues) => {
        console.log('checked = ', checkedValues);
        checked.narsoftankara = checkedValues.target.checked;
        console.log(checked);
        setChecked(checked);
        setModalState({ visible: true });
        // setChecked2(checked);
    };

    const onChangeCheckboxNarsoftIstanbul = (checkedValues) => {
        console.log('checked = ', checkedValues);
        checked.narsoftistanbul = checkedValues.target.checked;
        console.log(checked);
        setChecked(checked);
        setModalState({ visible: true });
        // setChecked2(checked);
    };

    const handleOk = () => {
        setModalState({ visible: false });
    };

    const handleCancel = () => {
        setModalState({ visible: false });
    };

    return (
        <LayoutContentWrapper style={{ height: '100vh' }}>
            <LayoutContent>
                <h1>UserAuthorizationDefinations Page</h1>

                <Select
                    showSearch
                    className="select-component"
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                >
                    <Option value="LokmanOrucoglu">Lokman Orucoglu</Option>
                    <Option value="AhmetOrucoglu">Ahmet Orucoglu</Option>
                    <Option value="EbubekirOrucoglu">Ebubekir Orucoglu</Option>
                </Select>

                <br />
                <br />
                <br />

                {checksVisible &&
                    <ContentHolder>
                        <Checkbox checked={checked.narsoftbursa} id="narsoftbursa" onChange={onChangeCheckboxNarsoftBursa}>Narsoft Bursa</Checkbox><br />
                        <Checkbox checked={checked.narsoftankara} onChange={onChangeCheckboxNarsoftAnkara}>Narsoft Ankara</Checkbox><br />
                        <Checkbox checked={checked.narsoftistanbul} onChange={onChangeCheckboxNarsoftIstanbul}>Narsoft Istanbul</Checkbox><br />
                    </ContentHolder>
                }

                <Modal
                    visible={modalState.visible}
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
                            loading={modalState.loading}
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

            </LayoutContent>
        </LayoutContentWrapper>
    );
}
