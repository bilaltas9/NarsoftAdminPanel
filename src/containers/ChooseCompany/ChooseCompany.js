import React from 'react';
import { Select } from 'antd';
import { useHistory } from 'react-router-dom';
import roleDefinitionsActions from '@iso/redux/chooseCompany/actions';
import { useDispatch } from 'react-redux';
import IntlMessages from '@iso/components/utility/intlMessages';

const {
    selectCompany,
} = roleDefinitionsActions;

const { Option } = Select;


let companyList = [
    { id: 1, title: "Narsoft Bursa" },
    { id: 2, title: "Narsoft Istanbul" },
    { id: 3, title: "Narsoft Ankara" }
]

const selectStyle = {
    width: '100%',
    display: 'flex!important',
    flexFlow: 'row wrap',
    flexDirection: 'column!important',
    justifyContent: 'center!important',
    alignItems: 'center!important',
    textAlign: 'center!important',
    minHeight: '100vh!important'
};

export default function ChooseCompany() {
    let history = useHistory();
    const dispatch = useDispatch();
    const onSelectUser = (input) => {
        const selectedItem = companyList.find(x => x.id === (input + 1));
        dispatch(selectCompany(selectedItem));
        history.push('/dashboard');
    };
    return (
        <>
            <h1><IntlMessages id="page.chooseCompanyForm.header" /></h1>
            <Select
                showSearch
                style={selectStyle}
                placeholder="Şirket Seçiniz"
                optionFilterProp="children"
                onSelect={(e) => onSelectUser(e)}
                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
            >
                {
                    companyList.map((personel, i) => {
                        return (
                            <Option key={i} value={i}>{personel.title}</Option>
                        )
                    })
                }
            </Select>
        </>

    );
}
