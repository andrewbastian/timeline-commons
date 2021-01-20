import React, { useState, useContext } from 'react';
import { AuthContext } from '../App';
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container, Grid, Checkbox, FormControlLabel } from '@material-ui/core';

// UTILS
import { StoreContext } from '../Utils/store';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            display: 'inline',
        },
    },
}));

const Login = () => {
    const classes = useStyles();
    const { dispatch, state } = useContext(AuthContext);
    const initialState = {
        username: '',
        password: '',
        isSubmitting: false,
        errorMessage: null,
    };
    const [data, setData] = useState(initialState);
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null,
        });
        fetch('https://hookedbe.herokuapp.com/api/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password,
            }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then((resJson) => {
                dispatch({
                    type: 'LOGIN',
                    payload: resJson,
                });
            })
            .catch((error) => {
                setData({
                    ...data,
                    isSubmitting: false,
                    errorMessage: error.message || error.statusText,
                });
            });
    };

    const handleAuth = (e) => {
        e.preventDefault();
        state.isAuthenticated = true;
    };

    return (
        <React.Fragment>
            {/*<form className={classes.root} noValidate autoComplete='off' onSubmit={handleAuth}>*/}
            <form className={classes.root} noValidate autoComplete='off' onSubmit={handleFormSubmit}>
                <Grid item md={2}>
                    <TextField
                        id='standard-basic'
                        label='Username'
                        // className={classes.tlddcText}
                        // value={draft.title}
                        value={data.username}
                        name='username'
                        onChange={handleInputChange}
                    />
                </Grid>

                <Grid item md={2}>
                    <TextField
                        id='standard-basic'
                        label='Password'
                        // className={classes.tlddcText}
                        value={data.password}
                        name='password'
                        onChange={handleInputChange}
                    />
                </Grid>
                <Button disabled={data.isSubmitting}> {data.isSubmitting ? 'Loading...' : 'Login'}</Button>
            </form>
        </React.Fragment>
    );
};

export default Login;
