import React from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Form } from 'antd';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import IntlMessages from '@iso/components/utility/intlMessages';
import Input from '@iso/components/uielements/input';
import { notification } from '@iso/components';
import { useHistory } from 'react-router-dom';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export const ErrorTypeEnums = {
    None: 0,
    Succcess: 1,
    MaxSizeError: 2,
    MinSizeError: 3,
    RequiredError: 4,
    RegexError: 5,
}

export default function AddRole() {

    let history = useHistory();
    const [nameError, setnameError] = React.useState(ErrorTypeEnums.None);

    function registrationStringValidation(text, enumType) {
        const regex = new RegExp('^[a-zA-Z]+$');
        if (!regex.test(text) && text.length > 0) {
            return ErrorTypeEnums.RegexError;
        }
        return enumType;
    };


    function nameChange(event) {
        console.log(event.target.value);

        let enumType = ErrorTypeEnums.Succcess;

        if (event.target.value.length > 50) {
            enumType = ErrorTypeEnums.MaxSizeError;
        }
        else if (event.target.value.length < 3) {
            enumType = ErrorTypeEnums.MinSizeError;
        }
        else if (event.target.value.length === 0) {
            enumType = ErrorTypeEnums.RequiredError;
        }
        else {
            enumType = ErrorTypeEnums.Succcess;
        }

        enumType = registrationStringValidation(event.target.value, enumType);

        setnameError(enumType);
    }

    function handleSubmit() {
        notification('success', `Registiration is successfull..`);
        setTimeout(function () {
            history.push('/dashboard/role_definition');
        }, 500);
    }


    return (
        <LayoutContentWrapper style={{ height: '80vh' }}>
            <LayoutContent>
                <Link to="/dashboard/role_definition">
                    <Button type="primary" className="mateAddInvoiceBtn">
                        Cancel
                    </Button>
                </Link>
                <PageHeader>
                    {<IntlMessages id="forms.roles.addRole" />}
                </PageHeader>
                <Box style={{ height: '75%' }}>
                    <Form>
                    <FormItem
                            name="name"
                            {...formItemLayout}
                            label={<IntlMessages id="forms.roles.name" />}
                            hasFeedback={nameError === ErrorTypeEnums.None ? null : true}
                            validateStatus={
                                nameError === ErrorTypeEnums.MaxSizeError ||
                                    nameError === ErrorTypeEnums.MinSizeError ||
                                    nameError === ErrorTypeEnums.RequiredError ||
                                    nameError === ErrorTypeEnums.RegexError ? "error" : "success"}
                            help={
                                nameError === ErrorTypeEnums.MaxSizeError ? <IntlMessages id="max size error" /> :
                                    nameError === ErrorTypeEnums.MinSizeError ? <IntlMessages id="min size error" /> :
                                        nameError === ErrorTypeEnums.RequiredError ? <IntlMessages id="required error" /> :
                                            nameError === ErrorTypeEnums.RegexError ? <IntlMessages id="regex error" /> : null}
                        >
                            <Input id="success" onChange={nameChange} />
                        </FormItem>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" text="Submit" onClick={handleSubmit}>
                                <IntlMessages id="forms.addUserForm.register" />
                            </Button>
                        </Form.Item>
                    </Form>
                </Box>
            </LayoutContent>
        </LayoutContentWrapper>
    );
}
