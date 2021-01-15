import React from 'react';
import PropTypes from 'prop-types';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';

//Components
import TopicsCountries from './TopicsCountries';
import EventFormEntities from './EventFormEntities';
import TextEdit from './TextEdit';
import SyntaxMarkdown from './SyntaxMarkdown'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component='a'
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function FormTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position='static' color='secondary'>
                <Tabs variant='fullWidth' value={value} onChange={handleChange} aria-label='nav tabs example'>
                    <LinkTab label='Text' href='/TextEdit' {...a11yProps(0)} />
                    <LinkTab label='Entities' href='/EventFormEntities' {...a11yProps(1)} />
                    <LinkTab label='Topics and Countries' href='/TopicsDataGrid' {...a11yProps(2)} />
                    <LinkTab label='Syntax' href='/spam' {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <TextEdit />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <EventFormEntities />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TopicsCountries />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <SyntaxMarkdown/>
            </TabPanel>
        </div>
    );
}
