import React, { useState } from 'react';

import clsx from 'clsx';

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
    Container,
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
    hide: {
        display: 'none',
    },
    show: {
        display: 'block',
    },
}));

const EventFormEntities = () => {
    const classes = useStyles();

    const [entity, setEntityObj] = useState({
        checkedNames: true,
        checkedContent: false,
        entityType: '',
    });

    const [search, setSearch] = useState(false);

    const handleCheckChange = (event) => {
        setEntityObj({ ...entity, [event.target.name]: event.target.checked });
    };

    const handleSearch = () => {
        setSearch(true);
    };

    return (
        <>
            <FormGroup column>
                <TextField id='standard-search' label='Search text' type='search' />
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={entity.checkedNames}
                                onChange={handleCheckChange}
                                name='checkedNames'
                                color='primary'
                            />
                        }
                        label='Names'
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={entity.checkedContent}
                                onChange={handleCheckChange}
                                name='checkedContent'
                                color='primary'
                            />
                        }
                        label='Content'
                    />
                </FormGroup>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor='entity-type-native-simple'>Entry Type</InputLabel>
                    <Select
                        native
                        value={entity.entityType}
                        onChange={(event) => setEntityObj({ ...entity, entityType: event.target.value })}
                        inputProps={{
                            name: 'entity-type',
                            id: 'entity-type-native-simple',
                        }}
                    >
                        <option aria-label='None' value='' />
                        <option value={10}>Person</option>
                        <option value={20}>Event</option>
                    </Select>
                </FormControl>
                <Button onClick={handleSearch}>Perform Search</Button>
            </FormGroup>
            <Container className={clsx(classes.hide, search && classes.show)}>
                <EntityResults />
            </Container>
        </>
    );
};

export default EventFormEntities;
