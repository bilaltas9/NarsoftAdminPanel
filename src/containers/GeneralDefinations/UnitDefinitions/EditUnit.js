import React from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Form } from 'antd';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import IntlMessages from '@iso/components/utility/intlMessages';
import Input, {
    Textarea,
} from '@iso/components/uielements/input';
import Select, { SelectOption } from '@iso/components/uielements/select';
import Checkbox from '@iso/components/uielements/checkbox';
import Dropzone from '@iso/components/uielements/dropzone';
import DropzoneWrapper from './Dropzone.styles';
import { notification } from '@iso/components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Option = SelectOption;

const FormItem = Form.Item;

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

export const ErrorTypeEnums = {
    None: 0,
    Succcess: 1,
    MaxSizeError: 2,
    MinSizeError: 3,
    RequiredError: 4,
    RegexError: 5,
}

export default function EditCompany() {

    let history = useHistory();
    const companyEditData = useSelector(state => state.CompanyDefination.editCompany);
    const [registrationError, setregistrationError] = React.useState(ErrorTypeEnums.None);
    const [nameError, setnameError] = React.useState(ErrorTypeEnums.None);
    const [surnameError, setsurnameError] = React.useState(ErrorTypeEnums.None);

    function registrationStringValidation(text, enumType) {
        const regex = new RegExp('^[a-zA-Z]+$');
        if (!regex.test(text) && text.length > 0) {
            return ErrorTypeEnums.RegexError;
        }
        return enumType;
    };

    function handleChange(event) {
        console.log(event.target);
    }


    function registrationNumberValidation(text, enumType) {
        const regex = new RegExp('^[0-9]+$');
        if (!regex.test(text) && text.length > 0) {
            return ErrorTypeEnums.RegexError;
        }
        return enumType;
    };

    function surNameChange(event) {
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

        setsurnameError(enumType);
    }

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
            history.push('/dashboard/unit_definations');
        }, 500);
    }


    return (
        <LayoutContentWrapper style={{ height: '100vh' }}>
            <LayoutContent>
                <Link to="/dashboard/unit_definations">
                    <Button type="primary" className="mateAddInvoiceBtn">
                        Cancel
                    </Button>
                </Link>
                <PageHeader>
                    {<IntlMessages id="forms.editCompanyForm.header" />}
                </PageHeader>
                <Box style={{ height: '90%' }}>
                    <Form>
                        <FormItem
                            name="name"
                            initialValue={companyEditData.firstName}
                            {...formItemLayout}
                            label={<IntlMessages id="forms.addUserForm.name" />}
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

                        <FormItem
                            {...formItemLayout}
                            label={
                                <IntlMessages id="forms.addUserForm.surname" />
                            }
                            hasFeedback={surnameError === ErrorTypeEnums.None ? null : true}
                            validateStatus={
                                surnameError === ErrorTypeEnums.MaxSizeError ||
                                    surnameError === ErrorTypeEnums.MinSizeError ||
                                    surnameError === ErrorTypeEnums.RequiredError ||
                                    surnameError === ErrorTypeEnums.RegexError ? "error" : "success"}
                            help={
                                surnameError === ErrorTypeEnums.MaxSizeError ? <IntlMessages id="forms.maxSizeError" /> :
                                    surnameError === ErrorTypeEnums.MinSizeError ? <IntlMessages id="forms.minSizeError" /> :
                                        surnameError === ErrorTypeEnums.RequiredError ? <IntlMessages id="forms.requiredError" /> :
                                            surnameError === ErrorTypeEnums.RegexError ? <IntlMessages id="forms.regexError" /> : null}
                        >
                            <Input id="warning1" onChange={surNameChange} />
                        </FormItem>

                        
                        <FormItem
                            {...formItemLayout}
                            label={<IntlMessages id="forms.addUserForm.adress" />}
                        >
                            <Textarea rows={6} id="warning" onChange={handleChange} />
                        </FormItem>


                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" text="Submit" onClick={handleSubmit}>
                                <IntlMessages id="forms.addUserForm.register" />
                            </Button>
                        </FormItem>

                    </Form>
                </Box>

            </LayoutContent>
        </LayoutContentWrapper>
    );
}
