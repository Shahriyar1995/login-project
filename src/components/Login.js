import React, { useEffect, useState } from 'react';
import validate from './validate';
import styles from './Login.module.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from './toast';
import { Link } from 'react-router-dom';

const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({});
    const [touch, setTouch] = useState({});

    useEffect(() => {
        setErrors(validate(data, 'login'))
    }, [data, touch])


    const changeHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const focusHandler = (event) => {
        setTouch({ [event.target.name]: true })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify('You are signed in successfully', 'success');

        } else {
            setTouch({
                email: true,
                password: true,
            })

            notify('Invalid data', 'error');

        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>

                <div className={styles.formField}>
                    <label>Email</label>
                    <input type="email"
                        name='email'
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={errors.email && touch.email ? styles.uncompleted : styles.formInput}
                    />
                    {errors.email && touch.email && <span>{errors.email}</span>}
                </div>

                <div className={styles.formField}>
                    <label>Password</label>
                    <input type="password"
                        name='password'
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={errors.password && touch.password ? styles.uncompleted : styles.formInput}
                    />
                    {errors.password && touch.password && <span>{errors.password}</span>}
                </div>



                <div className={styles.formButtons}>
                    <Link to="/signup" >Sign Up</Link>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;