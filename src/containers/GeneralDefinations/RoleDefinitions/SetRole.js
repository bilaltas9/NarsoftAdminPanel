import React from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import ContentHolder from '@iso/components/utility/contentHolder';
import Collapse from '@iso/components/uielements/collapse';
import IntlMessages from '@iso/components/utility/intlMessages';
import Tabs, { TabPane } from '@iso/components/uielements/tabs';
import { Checkbox } from 'antd';

const text = <IntlMessages id="uiElements.collapse.text" />;

let option = [
    { id: 1, title: "Narsoft Bursa", isChecked: true },
    { id: 2, title: "Narsoft Bursa", isChecked: false },
    { id: 3, title: "Narsoft Bursa", isChecked: false },
    { id: 4, title: "Narsoft Bursa", isChecked: false },
]

function callback(key) { }

const { Panel } = Collapse;


const onChangeProperty = (checked, id) => {
    
}

export default function SetRole() {
    return (
        <LayoutContentWrapper style={{ height: '100vh' }}>
            <LayoutContent>
                <h1>SetRole test</h1>

                <ContentHolder>
                    <Collapse accordion>
                        {option.map((item, i) => {
                            return (
                                <Panel
                                    header={<IntlMessages id="uiElements.collapse.headerOne" />}
                                    key={i}
                                >
                                    <p>{text}</p>

                                    <Tabs defaultActiveKey="1" onChange={callback}>
                                        <TabPane tab="Tab 1" key="1">
                                            <ContentHolder>
                                                {option.map((item, i) => {
                                                    return (
                                                        <Checkbox
                                                            key={i}
                                                            checked={item.isChecked}
                                                            onChange={(e) => onChangeProperty(e.target.checked, item.id)}
                                                        >{item.title}</Checkbox>
                                                    )
                                                })}
                                            </ContentHolder>
                                        </TabPane>
                                        <TabPane tab="Tab 2" key="2">
                                            Content of Tab Pane 2
                                        </TabPane>
                                        <TabPane tab="Tab 3" key="3">
                                            Content of Tab Pane 3
                                        </TabPane>
                                    </Tabs>

                                </Panel>



                                // <Checkbox
                                //     key={i}
                                //     checked={item.isChecked}
                                //     onChange={(e) => onChangeProperty(e.target.checked, item.id)}
                                // >{item.title}</Checkbox>
                            )
                        })}
                    </Collapse>
                </ContentHolder>
            </LayoutContent>
        </LayoutContentWrapper>
    );
}
