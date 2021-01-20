import React, { useState, useEffect } from 'react';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container, Grid, Checkbox, FormControlLabel } from '@material-ui/core';

// Components
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

    const [publicDraft, setPublicDraft] = useState({
        checkedPublicDraft: true,
    });

    const [draft, setDraft] = useState({
        title: '',
        link: '',
        displayDate: '',
        comments: '',
        actualStart: new Date(),
        actualEnd: new Date(),
    });
    const [title, setTitle] = useState('');

    const handlePublicChange = (event) => {
        setPublicDraft({ ...publicDraft, [event.target.name]: event.target.checked });
    };

    const handleDraftChange = (event) => {
        setDraft({ ...draft, [event.target.name]: event.target.value });
    };
    useEffect(() => console.log('DRAFT', draft));
    // useEffect(() => console.log('TITLE', title));

    return (
        <>
            <FormHeader />
            <form
                className={classes.root}
                noValidate
                autoComplete='off'
                // style={{backgroundColor:'red'}}
            >
                <Grid container className={classes.mainGrid}>
                    <Grid item md={2}>
                        <TextField
                            id='standard-basic'
                            label='Title'
                            className={classes.tlddcText}
                            // value={draft.title}
                            value={draft.title}
                            onChange={(event) => setDraft({ ...draft, title: event.target.value })}
                        />
                    </Grid>

                    <Grid item md={2}>
                        <TextField
                            id='standard-basic'
                            label='Link'
                            className={classes.tlddcText}
                            value={draft.link}
                            onChange={(event) => setDraft({ ...draft, link: event.target.value })}
                        />
                    </Grid>

                    <Grid item md={2}>
                        <TextField
                            id='standard-basic'
                            label='Display Date'
                            className={classes.tlddcText}
                            value={draft.displayDate}
                            onChange={(event) => setDraft({ ...draft, displayDate: event.target.value })}
                        />
                    </Grid>

                    <Grid item md={3}>
                        <TextField
                            id='standard-multiline-flexible'
                            label='Comments'
                            multiline
                            rowsMax={4}
                            value={draft.comments}
                            onChange={(event) => setDraft({ ...draft, comments: event.target.value })}
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
                                value={draft.actualStart}
                                onChange={(event) => setDraft({ ...draft, actualStart: event.target.value })}
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
                                value={draft.actualEnd}
                                onChange={(event) => setDraft({ ...draft, actualEnd: event.target.value })}
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
                            checked={publicDraft.checkedPublicDraft}
                            onChange={handlePublicChange}
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
