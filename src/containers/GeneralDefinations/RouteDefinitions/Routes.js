import React, { useState } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import PageHeader from '@iso/components/utility/pageHeader';
import IntlMessages from '@iso/components/utility/intlMessages';
import { Select } from 'antd';
import ContentHolder from '@iso/components/utility/contentHolder';
import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
const { Option } = Select;

const onSearch = (value) => {
    console.log('search:', value);
};

let option = [
    { id: 1 },
]

let personeelList = [
    { id: 1, title: "Lokman ORUCOGLU" },
    { id: 2, title: "Bilal TAS" },
    { id: 3, title: "Ebubekir ORUCOGLU" }
]


export default function Routes() {

    const [stateOption, setStateOption] = useState(option);

    const onChangeProperty = (checked, id) => {

    }

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onChangeSelect = (value, i) => {
        console.log(`selected ${value}, index : ${i}`);
    };

    const onClickAdd = () => {
        const newArray = stateOption.concat({ id: stateOption.length + 1 });
        setStateOption(newArray);
        console.log(`added ${stateOption.length + 1}`);
    };

    const onClickRemove = (value) => {
        const newArray = stateOption.filter(x => x.id !== value);
        let smallerArray = newArray.filter(x => x.id < value);
        let array = newArray.filter(x => x.id > value).map(x => { return { id: x.id - 1 } });
        setStateOption(smallerArray.concat(array));
        console.log(`removed ${value}`);
    };


    return (
        <LayoutContentWrapper style={{ height: '100vh' }}>
            <LayoutContent>
                <h1>Routes test</h1>
                <PageHeader>
                    {<IntlMessages id="forms.addCompanyForm.header" />}
                </PageHeader>


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

                <Select
                    showSearch
                    className="select-component"
                    placeholder="Select a type"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                >
                    <Option value="Izin">İzin</Option>
                    <Option disabled value="Mesai">Mesai</Option>
                </Select>

                <ContentHolder>
                    {stateOption.map((item, i) => {
                        return (
                            <div key={i}>
                                {item.id}. Onay

                                <Select
                                    showSearch
                                    className="select-component"
                                    placeholder="Select a personeel"
                                    optionFilterProp="children"
                                    onChange={(e)=>onChangeSelect(e, i+1)}
                                    onSearch={onSearch}
                                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                >
                                    {
                                        personeelList.map((personel, i) => {
                                            return (
                                                <Option key={i} value={i}>{personel.title}</Option>
                                            )
                                        })
                                    }
                                </Select>

                                Bilgilendirme Maili

                                <Select
                                    showSearch
                                    className="select-component"
                                    placeholder="Select a personeel"
                                    optionFilterProp="children"
                                    onChange={(e)=>onChangeSelect(e, i+1)}
                                    onSearch={onSearch}
                                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                >
                                    {
                                        personeelList.map((personel, i) => {
                                            return (
                                                <Option key={i} value={i}>{personel.title}</Option>
                                            )
                                        })
                                    }
                                </Select>
                                {item.id === 1 ? null : (<Button onClick={() => { onClickRemove(item.id) }} type="danger" icon={<MinusOutlined />} />)}
                                <br />
                            </div>
                        )
                    })}
                    {stateOption.length > 4 ? null : (<Button onClick={onClickAdd} type="primary" icon={<PlusOutlined />} />)}
                    {/* <Button onClick={onClickAdd} type="primary" icon={<PlusOutlined />} /> */}
                </ContentHolder>
                <br/>
                <Button type="primary" onClick={onSearch}>
                    Save
                </Button>
            </LayoutContent>
        </LayoutContentWrapper>
    );
}
