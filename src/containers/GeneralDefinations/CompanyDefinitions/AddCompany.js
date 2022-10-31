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

const Option = SelectOption;
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
const componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    method: true,
    showFiletypeIcon: true,
    uploadMultiple: false,
    maxFilesize: 2, // MB
    maxFiles: 2,
    dictMaxFilesExceeded: 'You can only upload upto 2 images',
    dictRemoveFile: 'Delete',
    dictCancelUploadConfirmation: 'Are you sure to cancel upload?',
    postUrl: 'no-url',
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
const djsConfig = { autoProcessQueue: false };
const eventHandlers = {
    addedfile: file => notification('success', `${file.name} added`),
    success: file =>
        notification('success', `${file.name} successfully uploaded`),
    error: error => notification('error', 'Server is not set in the demo'),
};

export const ErrorTypeEnums = {
    None: 0,
    Succcess: 1,
    MaxSizeError: 2,
    MinSizeError: 3,
    RequiredError: 4,
    RegexError: 5,
}

export default function AddCompany() {

    let history = useHistory();
    const [nameError, setnameError] = React.useState(ErrorTypeEnums.None);
    const [registrationError, setregistrationError] = React.useState(ErrorTypeEnums.None);

    function registrationStringValidation(text, enumType) {
        const regex = new RegExp('^[a-zA-Z]+$');
        if (!regex.test(text) && text.length > 0) {
            return ErrorTypeEnums.RegexError;
        }
        return enumType;
    };

    function registrationNumberValidation(text, enumType) {
        const regex = new RegExp('^[0-9]+$');
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

    function registrationhandleChange(event) {
        let enumType = ErrorTypeEnums.Succcess;

        if (event.target.value.length > 50) {
            enumType = ErrorTypeEnums.MaxSizeError;
        }
        else if (event.target.value.length === 0) {
            enumType = ErrorTypeEnums.RequiredError;
        }
        else {
            enumType = ErrorTypeEnums.Succcess;
        }

        enumType = registrationNumberValidation(event.target.value, enumType);

        setregistrationError(enumType);
    }

    function handleChange(event) {
        console.log(event.target);
    }

    function handleSubmit() {
        notification('success', `Registiration is successfull..`);
        setTimeout(function () {
            history.push('/dashboard/company_definations');
        }, 500);
    }


    return (
        <LayoutContentWrapper style={{ height: '80vh' }}>
            <LayoutContent>
                <Link to="/dashboard/company_definations">
                    <Button type="primary" className="mateAddInvoiceBtn">
                        Cancel
                    </Button>
                </Link>
                <PageHeader>
                    {<IntlMessages id="forms.addCompanyForm.header" />}
                </PageHeader>
                <Box style={{ height: '75%' }}>
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label={<IntlMessages id="forms.addCompanyForm.companyName" />}
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
                            name="registrationNumber"
                            {...formItemLayout}
                            label={<IntlMessages id="forms.addCompanyForm.companyCode" />}
                            hasFeedback={registrationError === ErrorTypeEnums.None ? null : true}
                            validateStatus={
                                registrationError === ErrorTypeEnums.MaxSizeError ||
                                    registrationError === ErrorTypeEnums.MinSizeError ||
                                    registrationError === ErrorTypeEnums.RequiredError ||
                                    registrationError === ErrorTypeEnums.RegexError ? "error" : "success"}
                            help={
                                registrationError === ErrorTypeEnums.MaxSizeError ? <IntlMessages id="max size error" /> :
                                    registrationError === ErrorTypeEnums.MinSizeError ? <IntlMessages id="min size error" /> :
                                        registrationError === ErrorTypeEnums.RequiredError ? <IntlMessages id="required error" /> :
                                            registrationError === ErrorTypeEnums.RegexError ? <IntlMessages id="regex error" /> : null}
                        >
                            <Input id="registrationNumber" onChange={registrationhandleChange} />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label={
                                <IntlMessages id="forms.addCompanyForm.companyLogo" />
                            }
                        >
                            <DropzoneWrapper>
                                <Dropzone
                                    config={componentConfig}
                                    eventHandlers={eventHandlers}
                                    djsConfig={djsConfig}
                                />
                            </DropzoneWrapper>
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label={
                                <IntlMessages id="forms.addCompanyForm.unitManagementType" />
                            }
                        >
                            <Select
                                defaultValue="1"
                                onChange={handleChange}
                                style={{ width: '120px' }}
                            >
                                <Option value="1">Departman</Option>
                                <Option value="2">Kadro</Option>
                                <Option value="3">Masraf Yeri</Option>
                            </Select>
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
