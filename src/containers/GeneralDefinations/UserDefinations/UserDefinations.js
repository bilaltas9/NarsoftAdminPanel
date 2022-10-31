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
import Switch from '@iso/components/uielements/switch';
import { useDispatch, useSelector } from 'react-redux';
import userDefinitionsActions from '@iso/redux/userDefination/actions';
import Modals from '@iso/components/Feedback/Modal';
import ModalStyle from '../../Feedback/Modal/Modal.styles';
import WithDirection from '@iso/lib/helpers/rtl';

const isoModal = ModalStyle(Modals);
const Modal = WithDirection(isoModal);

const {
  editUser,
} = userDefinitionsActions;

const margin = {
  margin: direction === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0',
};

export default function UserDefinations() {
  let { url } = useRouteMatch();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [check, setcheck] = useState(false);
  const [dataListState, setDataListState] = useState(new fakeData(10).getAll());

  const [modalState, setModalState] = useState({
    loading: false,
    visible: false,
  });


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
    dispatch(editUser(editItem));
    // setState({ detailModalvisible: true, detailModalSelectedItem: tt });
  };

  const onChangeSwitch = (index) => {
    // console.log(index);
    var tt = dataListState.find(x => x.id === index);
    console.log(tt);
    setcheck(!check);
    // setState({ detailModalvisible: true, detailModalSelectedItem: tt });
  };


  const ButtonCell = index =>
    <Link to={`${url}_edit`}><Button key={index} type="primary" onClick={(e) => { onClickIndex(index); }} style={margin}> {
      (
        <IntlMessages id="forms.button.simpleButtonPrimaryText" />
      )
    } </Button></Link>;

  const SwitchCell = index => <Switch checked={check} onChange={(e) => { onChangeSwitch(index); }} />;

  const RemoveButtonCell = index =>
    <Button
      className="invoiceDltBtn"
      // icon="delete"
      onClick={() => {
        console.log(index);
        setModalState({ visible: true });
      }}
    >
      <i className="ion-android-delete" />
    </Button>;


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
      case 'SwitchCell':
        return SwitchCell(value);
      case 'RemoveButtonCell':
        return RemoveButtonCell(value);
      default:
        return TextCell(value);
    }
  };

  const columns = [
    {
      title: <IntlMessages id="forms.addUserForm.registrationNumber" />,
      key: 'id',
      sorter: true,
      width: 100,
      render: object => renderCell(object, 'TextCell', 'id'),
    },
    {
      title: <IntlMessages id="antTable.title.firstName" />,
      key: 'firstName',
      sorter: true,
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
    },
    {
      title: <IntlMessages id="antTable.title.active.passive" />,
      key: 'key',
      width: 200,
      render: object => renderCell(object, 'SwitchCell', 'key'),
    },
    {
      title: <IntlMessages id="antTable.title.Remove" />,
      key: 'key',
      width: 200,
      render: object => renderCell(object, 'RemoveButtonCell', 'key'),
    }
  ];


  function filterUsers(search) {
    search = search.toUpperCase();
    if (search) {
      return new fakeData(10).getAll().filter((user) => user.firstName.toUpperCase().includes(search));
    }
    return new fakeData(10).getAll();
  }

  function onChangeSearch(event) {
    const result = filterUsers(event.target.value);
    setDataListState(result);
    setSearch(event.target.value);
  }

  // let dataList = filterUsers(new fakeData(10).getAll().concat(new fakeData(10).getAll()), search);


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
    <LayoutContentWrapper style={{ height: '160vh' }}>
      <LayoutContent>
        <h1>UserDefinations</h1>

        <div className="table-header">
          <Link to={`${url}_new`}>
            <Button type="primary" className="mateAddInvoiceBtn">
              Add User
            </Button>
          </Link>

          <InputSearch
            placeholder="Search Notes"
            className="isoSearchNotes"
            value={search}
            onChange={onChangeSearch}
          />
        </div>

        <TableWrapper
          pagination={true}
          columns={columns}
          onChange={onTableChange}
          dataSource={dataListState}
          className="isoSortingTable"
        />

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
