import React from 'react';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    Button,
    Checkbox,
    FormGroup,
    FormControlLabel,
    FormControl,
    InputLabel,
    Select,
} from '@material-ui/core';

// Components
import EntityResults from './EntityResults';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const EventFormEntities = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedNames: true,
        checkedContent: false,
        entryType: '',
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <FormGroup column>
                <TextField id='standard-search' label='Search text' type='search' />
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedA}
                                onChange={handleChange}
                                name='checkedB'
                                color='primary'
                            />
                        }
                        label='Names'
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange}
                                name='checkedB'
                                color='primary'
                            />
                        }
                        label='Content'
                    />
                </FormGroup>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor='entry-type-native-simple'>Entry Type</InputLabel>
                    <Select
                        native
                        value={state.entryType}
                        onChange={handleChange}
                        inputProps={{
                            name: 'entry-type',
                            id: 'entry-type-native-simple',
                        }}
                    >
                        <option aria-label='None' value='' />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
                <Button>Perform Search</Button>
            </FormGroup>
            <EntityResults/>
        </>
    );
};

export default EventFormEntities;
