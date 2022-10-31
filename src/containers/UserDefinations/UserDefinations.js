import React, { Component } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import TableWrapper from '../Tables/AntTables/AntTables.styles';
import IntlMessages from '@iso/components/utility/intlMessages';
import {
    DateCell,
    ImageCell,
    LinkCell,
    TextCell
} from '@iso/components/Tables/HelperCells';
import fakeData from '../Tables/data';
import { Button, Input, Checkbox, Select } from 'antd';
import { direction } from '@iso/lib/helpers/rtl';
import Modals from '@iso/components/Feedback/Modal';
import ModalStyle, { ModalContent } from '../Feedback/Modal/Modal.styles';
import WithDirection from '@iso/lib/helpers/rtl';
import UserDetailModal from '../UserDetailModal/UserDetailModel';
const { Option } = Select;

const margin = {
    margin: direction === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0',
};


const isoModal = ModalStyle(Modals);
const Modal = WithDirection(isoModal);

function info() {
    Modals.info({
        title: <h3>This is a notification message</h3>,
        content: (
            <ModalContent>
                <p>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated they
                    live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.
                </p>
                <p>some messages...some messages...</p>
            </ModalContent>
        ),
        onOk() { },
        okText: 'OK',
        cancelText: 'Cancel',
    });
}


const dataList = new fakeData(10).getAll();


const userList = new fakeData(5).getAll();


export default function () {

    const renderCell = (object, type, key) => {
        const value = object[key];
        switch (type) {
            case 'ImageCell':
                return ImageCell(value);
            case 'DateCell':
                return DateCell(value);
            case 'LinkCell':
                return LinkCell(value);
            case 'ButtonCell':
                return ButtonCell(value);
            default:
                return TextCell(value);
        }
    };


    const columns = [
        {
            title: <IntlMessages id="antTable.title.image" />,
            key: 'avatar',
            width: '1%',
            className: 'isoImageCell',
            render: object => renderCell(object, 'ImageCell', 'avatar'),
        },
        {
            title: <IntlMessages id="antTable.title.firstName" />,
            key: 'firstName',
            width: 100,
            render: object => renderCell(object, 'TextCell', 'firstName'),
        },
        {
            title: <IntlMessages id="antTable.title.lastName" />,
            key: 'lastName',
            width: 100,
            render: object => renderCell(object, 'TextCell', 'lastName'),
        },
        {
            title: <IntlMessages id="antTable.title.city" />,
            key: 'city',
            width: 200,
            render: object => renderCell(object, 'TextCell', 'city'),
        },
        {
            title: <IntlMessages id="antTable.title.email" />,
            key: 'email',
            width: 200,
            render: object => renderCell(object, 'LinkCell', 'email'),
        },
        {
            title: <IntlMessages id="antTable.title.Edit" />,
            key: 'key',
            width: 200,
            render: object => renderCell(object, 'ButtonCell', 'key'),
        }
    ];


    const onClickIndex = (index) => {
        // console.log(index);
        var tt = dataList.find(x => x.id === index);
        // console.log(tt);
        setState({ detailModalvisible: true, detailModalSelectedItem: tt });
    };

    const ButtonCell = index => <Button key={index} type="primary" onClick={(e) => { onClickIndex(index); }} style={margin}> {<IntlMessages id="forms.button.simpleButtonPrimaryText" />} </Button>;

    const [state, setState] = React.useState({
        detailModalloading: false,
        detailModalvisible: false,
        detailModalSelectedItem: null,
        addModalvisible: false
    });

    const handleOk = () => {
        setState({ detailModalloading: true });
        setTimeout(() => {
            setState({ detailModalloading: false, detailModalvisible: false });
        }, 2000);
    };
    const handleCancel = () => {
        setState({ detailModalvisible: false });
    };

    const handleOnChange = checkedValues => { };
    const handleChange = value => { };

    const addUserModalClick = () => {
        setState({ addModalvisible: true });
    };

    const onSelectUser = (input) => {
        console.log(input);
    };

    return (

        <LayoutContentWrapper style={{ height: '100vh' }}>
            <LayoutContent>
                <Button type="primary" className="mateAddInvoiceBtn" onClick={addUserModalClick}>
                    Add Invoice
                </Button>
                <h1>User Definations List</h1>
                <TableWrapper
                    pagination={false}
                    columns={columns}
                    dataSource={dataList}
                    className="isoSimpleTable"
                />
                {/* <UserDetailModal visibility={visibility}></UserDetailModal> */}
                <Modal
                    visible={state.detailModalvisible}
                    title="User Login Cart"
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
                            loading={state.detailModalloading}
                            onClick={handleOk}
                        >
                            Submit
                        </Button>,
                    ]}
                >

                    Company :  <Input value={state.detailModalSelectedItem?.companyName} disabled />
                    Adi Soyadi :  <Input value={state.detailModalSelectedItem?.firstName + " " + state.detailModalSelectedItem?.lastName} disabled />
                    Aciklama :  <Input value={state.detailModalSelectedItem?.catchPhrase} disabled />
                    Derece :  <Input value={state.detailModalSelectedItem?.id + " Derece"} disabled />
                    Menu Yetki :
                    <Select
                        defaultValue="lucy"
                        onChange={handleChange}
                        style={{ width: '120px' }}
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    Liste Ozelliklerini Ac :  <Checkbox onChange={handleOnChange}>Checkbox</Checkbox>
                    Kod Bazli yetkilendirme :  <Checkbox onChange={handleOnChange} disabled>Checkbox</Checkbox>


                    <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind texts.
                        Separated they live in Bookmarksgrove right at the coast of
                        the Semantics, a large language ocean.
                    </p>
                    <p>Some contents...</p>
                </Modal>
                <Modal
                    visible={state.addModalvisible}
                    title="Add New User"
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
                            loading={state.detailModalloading}
                            onClick={handleOk}
                        >
                            Submit
                        </Button>,
                    ]}
                >
                    <Select
                        showSearch
                        style={{
                            width: 200,
                        }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        onSelect={(e)=> onSelectUser(e)}
                        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    >
                        {userList.map}
                        <Option value="1">Not Identified</Option>
                        <Option value="2">Closed</Option>
                        <Option value="3">Communicated</Option>
                        <Option value="4">Identified</Option>
                        <Option value="5">Resolved</Option>
                        <Option value="6">Cancelled</Option>
                    </Select>

                </Modal>
            </LayoutContent>
        </LayoutContentWrapper>
    );

}
