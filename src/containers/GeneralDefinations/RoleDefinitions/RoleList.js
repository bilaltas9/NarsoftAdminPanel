import React, { useState } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import { Button } from 'antd';
import TableWrapper from '../../Tables/AntTables/AntTables.styles';
import {
    DateCell,
    ImageCell,
    LinkCell,
    TextCell
} from '@iso/components/Tables/HelperCells';
import fakeData from '../../Tables/data';
import { direction } from '@iso/lib/helpers/rtl';
import IntlMessages from '@iso/components/utility/intlMessages';
import { InputSearch } from '@iso/components/uielements/input';
import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import roleDefinitionsActions from '@iso/redux/roleDefinition/actions';
import Modals from '@iso/components/Feedback/Modal';
import ModalStyle from '../../Feedback/Modal/Modal.styles';
import WithDirection from '@iso/lib/helpers/rtl';

const isoModal = ModalStyle(Modals);
const Modal = WithDirection(isoModal);
const margin = {
    margin: direction === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0',
};

const {
    editRole,
} = roleDefinitionsActions;

export default function CompanyList() {

    let { url } = useRouteMatch();
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [dataListState, setDataListState] = useState(new fakeData(10).getAll());
    const [modalState, setModalState] = useState({
        loading: false,
        visible: false,
    });

    function filterUsers(search) {
        search = search.toUpperCase();
        if (search) {
            return new fakeData(10).getAll().filter((user) => user.firstName.toUpperCase().includes(search));
        }
        return new fakeData(10).getAll();
    }

    const handleOk = () => {
        setModalState({ visible: false });
    };

    const handleCancel = () => {
        setModalState({ visible: false });
    };

    const onClickIndex = (index) => {
        // console.log(index);
        var editItem = dataListState.find(x => x.id === index);
        console.log(editItem);
        dispatch(editRole(editItem));
        // setState({ detailModalvisible: true, detailModalSelectedItem: tt });
    };

    const ButtonCell = index =>
        <Link to={`${url}_edit`}><Button key={index} type="primary" onClick={(e) => { onClickIndex(index); }} style={margin}> {
            (
                <IntlMessages id="forms.edit" />
            )
        } </Button></Link>;


    const RemoveButtonCell = index =>
        <Button
            className="invoiceDltBtn"
            style={{ backgroundColor: 'red' }}
            onClick={() => {
                console.log(index);
                setModalState({ visible: true });
            }}
        >
            <i className="ion-android-delete" />
        </Button>;


    function onChangeSearch(event) {
        const result = filterUsers(event.target.value);
        setDataListState(result);
        setSearch(event.target.value);
    }

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
            case 'RemoveButtonCell':
                return RemoveButtonCell(value);
            default:
                return TextCell(value);
        }
    };

    const columns = [
        {
            title: <IntlMessages id="forms.roles.name" />,
            key: 'firstName',
            sorter: true,
            width: 100,
            render: object => renderCell(object, 'TextCell', 'firstName'),
        },
        {
            title: <IntlMessages id="antTable.title.Edit" />,
            key: 'key',
            width: 200,
            render: object => renderCell(object, 'ButtonCell', 'key'),
        },
        {
            title: <IntlMessages id="antTable.title.Remove" />,
            key: 'key',
            width: 200,
            render: object => renderCell(object, 'RemoveButtonCell', 'key'),
        },
    ];

    const sortOption = {};
    function getSortAsc(sortKey) {
        sortOption.sortKey = sortKey;
        sortOption.sortDir = 'ASC';
        return dataListState.sort(sort);
    }
    function getSortDesc(sortKey) {
        sortOption.sortKey = sortKey;
        sortOption.sortDir = 'DESC';
        return dataListState.sort(sort);
    }
    function sort(optionA, optionB) {
        const valueA = optionA[sortOption.sortKey].toUpperCase();
        const valueB = optionB[sortOption.sortKey].toUpperCase();
        let sortVal = 0;
        if (valueA > valueB) {
            sortVal = 1;
        }
        if (valueA < valueB) {
            sortVal = -1;
        }
        if (sortVal !== 0 && sortOption.sortDir === 'DESC') {
            return sortVal * -1;
        }
        return sortVal;
    }

    function onTableChange(pagination, filters, sorter) {
        var result = [];
        if (sorter && sorter.columnKey && sorter.order) {
            if (sorter.order === 'ascend') {
                result = getSortAsc(sorter.columnKey);
            } else {
                result = getSortDesc(sorter.columnKey);
            }
            // dataList = dataList.getAll();
            setDataListState(result);
        }
    }

    return (
        <LayoutContentWrapper style={{ height: '120vh' }}>
            <LayoutContent>
                <div className="table-header">
                    <Link to={`${url}_new`}>
                        <Button type="primary" className="mateAddInvoiceBtn">
                            <IntlMessages id="forms.roles.addRole" />
                        </Button>
                    </Link>

                    <InputSearch
                        placeholder="Search Notes"
                        className="isoSearchNotes"
                        value={search}
                        onChange={onChangeSearch}
                    />
                </ div>
                <TableWrapper
                    pagination={true}
                    columns={columns}
                    onChange={onTableChange}
                    dataSource={dataListState}
                    className="isoSortingTable"
                />
                <Modal
                    visible={modalState.visible}
                    title={<IntlMessages id="forms.removeModalTitle" />}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" size="large" onClick={handleCancel}>
                            <IntlMessages id="forms.removeModalButtonReturn" />
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            size="large"
                            loading={modalState.loading}
                            onClick={handleOk}
                        >
                            <IntlMessages id="forms.removeModalButtonAccept" />
                        </Button>,
                    ]}
                >
                    <p><IntlMessages id="forms.removeModalContent" /></p>
                </Modal>
            </LayoutContent>
        </LayoutContentWrapper>
    );
}
