import React, { useEffect, useState } from 'react';
import validate from './validate';
import styles from './SignUp.module.css';

const SignUp = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: false,
    })

    const [errors, setErrors] = useState({});
    const [touch, setTouch] = useState({});

    useEffect(() => {
        setErrors(validate(data))
    }, [data, touch])


    const changeHandler = (event) => {

        if (event.target.name === 'isAccepted') {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    // const focusHandler = (event) => {
    //     setTouch({ ...touch, [event.target.name]: true })
    // }

    const focusHandler = (event) => {
        setTouch({ [event.target.name]: true })
    }


    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            alert('You are the best');
            console.log(data);
        } else {
            setTouch({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            })
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Sign Up</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input type="text" name='name' value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.name && touch.name && <span>{errors.name}</span>}
                </div>

                <div className={styles.formField}>
                    <label>Email</label>
                    <input type="email" name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.email && touch.email && <span>{errors.email}</span>}
                </div>

                <div className={styles.formField}>
                    <label>Password</label>
                    <input type="password" name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.password && touch.password && <span>{errors.password}</span>}
                </div>

                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input type="password" name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.confirmPassword && touch.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>

                <div className={styles.formField}>
                    <label>I accept terms of privacy policy</label>
                    <input type="checkbox" name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.isAccepted && touch.isAccepted && <span>{errors.isAccepted}</span>}
                </div>

                <div>
                    <a href="#">Login</a>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>

        </div>
    );
};

export default SignUp;