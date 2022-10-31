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
    const [surnameError, setsurnameError] = React.useState(ErrorTypeEnums.None);

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

    function handleChange(event) {
        console.log(event.target);
    }

    
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


    function handleSubmit() {
        notification('success', `Registiration is successfull..`);
        setTimeout(function () {
            history.push('/dashboard/unit_definations');
        }, 500);
    }


    return (
        <LayoutContentWrapper style={{ height: '80vh' }}>
            <LayoutContent>
                <Link to="/dashboard/unit_definations">
                    <Button type="primary" className="mateAddInvoiceBtn">
                        Cancel
                    </Button>
                </Link>
                <PageHeader>
                    {<IntlMessages id="forms.units.addunit" />}
                </PageHeader>
                <Box style={{ height: '75%' }}>
                    <Form>
                    <FormItem
                            name="name"
                            {...formItemLayout}
                            label={<IntlMessages id="forms.units.name" />}
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
                                <IntlMessages id="forms.units.code" />
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
                            label={<IntlMessages id="forms.units.description" />}
                        >
                            <Textarea rows={6} id="warning" onChange={handleChange} />
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
