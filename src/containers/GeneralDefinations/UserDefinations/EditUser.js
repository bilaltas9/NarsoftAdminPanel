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

export const PasswordResultTypeEnums = {
    None: 0,
    Succcess: 1,
    Error: 2,
}

export default function EditUser() {
    
    const userEditData = useSelector(state => state.UserDefination.editUser);
    let history = useHistory();
    const [registrationError, setregistrationError] = React.useState(ErrorTypeEnums.None);
    const [passwordResult, setpasswordResult] = React.useState(PasswordResultTypeEnums.None);
    const [isValidating, setisValidating] = React.useState(false);
    const [nameError, setnameError] = React.useState(ErrorTypeEnums.None);
    const [surnameError, setsurnameError] = React.useState(ErrorTypeEnums.None);
    const [mailError, setmailError] = React.useState(ErrorTypeEnums.None);
    const [cellPhoneError, setcellPhoneError] = React.useState(ErrorTypeEnums.None);

    const [firstPassword, setfirstPassword] = React.useState("");
    const [secondPassword, setsecondPassword] = React.useState("");

    function handleChange(event) {
        console.log(event.target.value);
    }

    function registrationNumberValidation(text, enumType) {
        const regex = new RegExp('^[0-9]+$');
        if (!regex.test(text) && text.length > 0) {
            return ErrorTypeEnums.RegexError;
        }
        return enumType;
    };

    function registrationStringValidation(text, enumType) {
        const regex = new RegExp('^[a-zA-Z]+$');
        if (!regex.test(text) && text.length > 0) {
            return ErrorTypeEnums.RegexError;
        }
        return enumType;
    };

    function registrationEmailValidation(text, enumType) {
        const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (!regex.test(text) && text.length > 0) {
            return ErrorTypeEnums.RegexError;
        }
        return enumType;
    };

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


    function passwordChange(event) {
        // console.log(event.target.value);

        if (event.target.value.length < 3) {
            setpasswordResult(PasswordResultTypeEnums.None);
            return;
        }

        setfirstPassword(event.target.value);
        setisValidating(true);
        setTimeout(function () {
            setisValidating(false);
            // setpasswordResult(PasswordResultTypeEnums.Error);
            setpasswordResult(PasswordResultTypeEnums.Succcess);
        }, 5000);
    }

    function passwordChangeCheck(event) {
        // console.log(event.target.value);

        if (event.target.value.length < 3) {
            setpasswordResult(PasswordResultTypeEnums.None);
            return;
        }


        setsecondPassword(event.target.value);
        setisValidating(true);
        setTimeout(function () {
            setisValidating(false);

            if (secondPassword === firstPassword)
                setpasswordResult(PasswordResultTypeEnums.Succcess);
            else
                setpasswordResult(PasswordResultTypeEnums.Error);

        }, 5000);
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

    function mailChange(event) {
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

        enumType = registrationEmailValidation(event.target.value, enumType);

        setmailError(enumType);
    }

    function cellPhoneChange(event) {
        console.log(event.target.value);

        let enumType = ErrorTypeEnums.Succcess;

        if (event.target.value.length > 11) {
            enumType = ErrorTypeEnums.MaxSizeError;
        }
        else if (event.target.value.length === 0) {
            enumType = ErrorTypeEnums.RequiredError;
        }
        else if (event.target.value.length < 11) {
            enumType = ErrorTypeEnums.MinSizeError;
        }
        else {
            enumType = ErrorTypeEnums.Succcess;
        }

        enumType = registrationNumberValidation(event.target.value, enumType);

        setcellPhoneError(enumType);
    }

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
    const djsConfig = { autoProcessQueue: false };
    const eventHandlers = {
        addedfile: file => notification('success', `${file.name} added`),
        success: file =>
            notification('success', `${file.name} successfully uploaded`),
        error: error => notification('error', 'Server is not set in the demo'),
    };

    function handleSubmit() {
        notification('success', `Registiration is successfull..`);
        setTimeout(function () {
            history.push('/dashboard/user_definations');
        }, 500);
    }

    return (
        <LayoutContentWrapper style={{ height: '150vh' }}>
            <LayoutContent>
                <Link to="/dashboard/user_definations">
                    <Button type="primary" className="mateAddInvoiceBtn">
                        Cancel Edit
                    </Button>
                </Link>
                <PageHeader>
                    {<IntlMessages id="forms.editUserForm.header" />}
                </PageHeader>
                <Box style={{ height: '90%' }}>
                    <Form>
                        <Form.Item
                            name="id"
                            initialValue={userEditData.id}
                            {...formItemLayout}
                            label={<IntlMessages id="forms.addUserForm.registrationNumber" />}
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
                        </Form.Item>

                        <FormItem
                            {...formItemLayout}
                            label={<IntlMessages id="forms.addUserForm.password" />}
                            hasFeedback
                            validateStatus={
                                isValidating ? "validating" :
                                    passwordResult === PasswordResultTypeEnums.Succcess ? "success" :
                                        passwordResult === PasswordResultTypeEnums.Error ? "error" : null}
                        >
                            <Input id="warning" onChange={passwordChange} />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label={
                                <IntlMessages id="forms.addUserForm.passwordAgain" />
                            }
                            hasFeedback
                            validateStatus={
                                isValidating ? "validating" :
                                    passwordResult === PasswordResultTypeEnums.Succcess ? "success" :
                                        passwordResult === PasswordResultTypeEnums.Error ? "error" : null}
                            help={isValidating ?
                                <IntlMessages id="forms.formsWithValidation.ValidatingHelp" /> : null
                            }
                        >
                            <Input id="validating" onChange={passwordChangeCheck} />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            name="firstName"
                            initialValue={userEditData.firstName}
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
                            name="lastName"
                            initialValue={userEditData.lastName}
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
                                surnameError === ErrorTypeEnums.MaxSizeError ? <IntlMessages id="max size error" /> :
                                    surnameError === ErrorTypeEnums.MinSizeError ? <IntlMessages id="min size error" /> :
                                        surnameError === ErrorTypeEnums.RequiredError ? <IntlMessages id="required error" /> :
                                            surnameError === ErrorTypeEnums.RegexError ? <IntlMessages id="regex error" /> : null}
                        >
                            <Input id="warning1" onChange={surNameChange} />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            name="email"
                            initialValue={userEditData.email}
                            label={
                                <IntlMessages id="forms.addUserForm.mail" />
                            }
                            hasFeedback={mailError === ErrorTypeEnums.None ? null : true}
                            validateStatus={
                                mailError === ErrorTypeEnums.MaxSizeError ||
                                mailError === ErrorTypeEnums.MinSizeError ||
                                mailError === ErrorTypeEnums.RequiredError ||
                                mailError === ErrorTypeEnums.RegexError ? "error" : "success"}
                            help={
                                mailError === ErrorTypeEnums.MaxSizeError ? <IntlMessages id="max size error" /> :
                                mailError === ErrorTypeEnums.MinSizeError ? <IntlMessages id="min size error" /> :
                                mailError === ErrorTypeEnums.RequiredError ? <IntlMessages id="required error" /> :
                                mailError === ErrorTypeEnums.RegexError ? <IntlMessages id="regex error" /> : null}
                        >
                            <Input id="error1" onChange={mailChange} />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label={<IntlMessages id="forms.addUserForm.cellPhone" />}
                            hasFeedback={cellPhoneError === ErrorTypeEnums.None ? null : true}
                            validateStatus={
                                cellPhoneError === ErrorTypeEnums.MaxSizeError ||
                                cellPhoneError === ErrorTypeEnums.MinSizeError ||
                                cellPhoneError === ErrorTypeEnums.RequiredError ||
                                cellPhoneError === ErrorTypeEnums.RegexError ? "error" : "success"}
                            help={
                                cellPhoneError === ErrorTypeEnums.MaxSizeError ? <IntlMessages id="max size error" /> :
                                cellPhoneError === ErrorTypeEnums.MinSizeError ? <IntlMessages id="min size error" /> :
                                cellPhoneError === ErrorTypeEnums.RequiredError ? <IntlMessages id="required error" /> :
                                cellPhoneError === ErrorTypeEnums.RegexError ? <IntlMessages id="regex error" /> : null}
                        >
                            <Input id="error" onChange={cellPhoneChange}/>
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label={<IntlMessages id="forms.addUserForm.adress" />}
                        >
                            <Textarea rows={6} id="warning" onChange={handleChange} />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label={
                                <IntlMessages id="forms.addUserForm.level" />
                            }
                        >
                            <Select
                                defaultValue="1"
                                onChange={handleChange}
                                style={{ width: '120px' }}
                            >
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                            </Select>
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label={<IntlMessages id="forms.addUserForm.isCreateOwnLeave" />}
                            validateStatus="success"
                        >
                            <Checkbox onChange={handleChange} />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label={
                                <IntlMessages id="forms.addUserForm.photo" />
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
                            name="sentence"
                            initialValue={userEditData.sentence}
                            label={
                                <IntlMessages id="forms.addUserForm.explanation" />
                            }
                        >
                            <Textarea rows={6} id="warning" onChange={handleChange} />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            name="authorization"
                            valuePropName="checked"
                            initialValue={true}
                            label={<IntlMessages id="forms.addUserForm.unitBasedAuthorization" />}
                        >
                            <Checkbox onChange={handleChange} />
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
