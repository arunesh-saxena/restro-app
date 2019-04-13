import appConstants from '../appConstants/appConstants';
const { error } = appConstants.labels;

export const signUpValidate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = error.required;
    } else if (values.username.length > 15) {
        errors.username = error.charactersLess;
    }
    if (!values.email) {
        errors.email = error.required;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = error.invalidEmail;
    }
    if (!values.userPassword) {
        errors.userPassword = error.required;
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = error.required;
    } else if (values.confirmPassword !== values.userPassword) {
        errors.confirmPassword = error.misMatchWithPassword;
    }
    return errors
};

export const loginValidate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = error.required;
    } else if (values.username.length > 15) {
        errors.username = error.charactersLess;
    }
    if (!values.password) {
        errors.password = error.required;
    }
    return errors
};

export const menuUploadValidate = values => {
    const errors = {};
    
    return errors
};