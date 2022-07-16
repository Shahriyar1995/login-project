const validate = (data, type) => {

    const errors = {};

    if (!data.email) {
        errors.email = "Email Required"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email address is not valid"
    } else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = "Password is reqired"
    } else if (data.password.length < 6) {
        errors.password = "Password need to be 6 characters or more"
    } else {
        delete errors.password
    }


    if (type === 'signup') {

        if (!data.name.trim()) {
            errors.name = "Username required"
        } else {
            delete errors.name;
        }


        if (!data.confirmPassword) {
            errors.confirmPassword = "Confirm the password"
        } else if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "Password is not match"
        } else {
            delete errors.confirmPassword
        }

        if (data.isAccepted) {
            delete errors.isAccepted
        } else {
            errors.isAccepted = "Accept our regulations"
        }

    }

    return errors;   /// ===> The Validate function finally return us an Object <=== ///
};

export default validate;