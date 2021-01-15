import React from 'react';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container, Grid, Checkbox, FormControlLabel } from '@material-ui/core';

// Components
import Home from '../Home';
import FormTabs from './FormTabs';
import FormHeader from './FormHeader';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            // width: '25ch',
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },

    dateFieldGrid: {
        // display: 'flex',
        // alignItems: 'space-evenly',
        flexDirection: 'column',
    },
    mainGrid: {
        spacing: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center',
    },
    textField: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    tlddcText: {
        width: '75%',
    },
}));

const EventForm = () => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedPublicDraft: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <Home />
            <FormHeader />
            <form
                className={classes.root}
                noValidate
                autoComplete='off'
                // style={{backgroundColor:'red'}}
            >
                <Grid container className={classes.mainGrid}>
                    <Grid item md={2}>
                        <TextField id='standard-basic' label='Title' className={classes.tlddcText} />
                    </Grid>

                    <Grid item md={2}>
                        <TextField id='standard-basic' label='Link' className={classes.tlddcText} />
                    </Grid>

                    <Grid item md={2}>
                        <TextField id='standard-basic' label='Display Date' className={classes.tlddcText} />
                    </Grid>

                    <Grid item md={3}>
                        <TextField
                            id='standard-multiline-flexible'
                            label='Comments'
                            multiline
                            rowsMax={4}
                            // value={value}
                            // onChange={handleChange}
                            variant='standard'
                            className={classes.tlddcText}
                        />
                    </Grid>

                    <Grid className={classes.dateFieldGrid}>
                        <Grid item xs={3}>
                            <TextField
                                id='date'
                                label='Actual Start'
                                type='date'
                                defaultValue='2017-05-24'
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                id='date'
                                label='Actual End'
                                type='date'
                                defaultValue='2017-05-24'
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <div>
                    <FormTabs />
                </div>
                                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedPublicDraft}
                                onChange={handleChange}
                                name='checkedB'
                                color='primary'
                            />
                        }
                        label='Drafts of this entry can be viewed and edited by other project members'
                    />
                <Container className={classes.buttons}>
                    <Button variant='contained' color='secondary'>
                        Submit Entry
                    </Button>
                    <Button variant='contained' color='secondary'>
                        Save and work on later
                    </Button>
                    <Button variant='contained' color='secondary'>
                        Preview
                    </Button>
                    <Button variant='contained' color='secondary'>
                        Cancel
                    </Button>

                </Container>
            </form>
        </>
    );
};

export default EventForm;
