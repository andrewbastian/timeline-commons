import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { FormHelperText, Input, InputLabel, MenuItem, FormControl, FormGroup, Select, Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formGroup: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '40%',
        maxWidth: '40%',
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: '50%',
        },
    },
};

const topics = [
    '9/11',
    'SpaceX',
    'Panama Papers',
    'Ralph goes to school',
    'Omar gets lunch',
    'Carlos is a great guy',
    'Miriam Wagner no relation',
    'Bradley Wilkerson sounds like a fake name',
    'Virginia Andrews is crazy',
    'Kelly Snyder is not crazy',
];

const countries = ['Afganistan', 'Bolivia', 'Canada', 'UK', 'USA', 'China', 'Japan', 'Mexico', 'Brazil', 'USSR'];

function getTopicStyles(topic, topicName, theme) {
    return {
        fontWeight:
            topicName.indexOf(topic) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
}

function getCountryStyles(country, countryName, theme) {
    return {
        fontWeight:
            countryName.indexOf(country) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function TopicsCountries() {
    const classes = useStyles();
    const theme = useTheme();
    const [topicName, setTopicName] = React.useState([]);
    const [countryName, setCountryName] = React.useState([]);

    const handleTopicChange = (event) => {
        setTopicName(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountryName(event.target.value);
    };

    return (
        <div>
            {/*Topics*/}
            <FormGroup row className={classes.formGroup}>
                <FormControl className={classes.formControl}>
                    <InputLabel id='topics-mutiple-chip-label'>Topics</InputLabel>
                    <Select
                        labelId='topics-mutiple-chip-label'
                        id='topics-mutiple-chip'
                        multiple
                        value={topicName}
                        onChange={handleTopicChange}
                        input={<Input id='select-multiple-chip' />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {topics.map((topic) => (
                            <MenuItem key={topic} value={topic} style={getTopicStyles(topic, topicName, theme)}>
                                {topic}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Select at least one topic that relates to this entry.</FormHelperText>
                </FormControl>

                {/*Countries*/}
                <FormControl className={classes.formControl}>
                    <InputLabel id='country-mutiple-chip-label'>Countries</InputLabel>
                    <Select
                        labelId='country-mutiple-chip-label'
                        id='country-mutiple-chip'
                        multiple
                        value={countryName}
                        onChange={handleCountryChange}
                        input={<Input id='select-multiple-chip' />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {countries.map((country) => (
                            <MenuItem
                                key={country}
                                value={country}
                                style={getCountryStyles(country, countryName, theme)}
                            >
                                {country}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Select at least one country that relates to this entry.</FormHelperText>
                </FormControl>
            </FormGroup>
        </div>
    );
}
