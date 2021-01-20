import React, { useState, useEffect } from 'react';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Container, Paper, Box, Typography } from '@material-ui/core';

const TimelinesIndex = (props) => {
    const [projects, setProjects] = useState([
        { projectName: 'US Solar Industry', managedBy: ['matt', 'Derek', 'KJF', 'mtuck'] },
        { projectName: 'Global Financial and Economic Crisis 2007-Present', managedBy: ['matt', 'KJF', 'mtuck'] },
        { projectName: 'Complete 911 Timeline', managedBy: ['matt', 'Derek', 'Paul', 'KJF', 'mtuck', 'paxvector'] },
        { projectName: 'US Electoral Politics', managedBy: ['Derek', 'mtuck'] },
        { projectName: 'US Civil Liberties', managedBy: ['Paul', 'KJF', 'mtuck', 'paxvector'] },
        { projectName: 'US Health Care System', managedBy: ['Derek', 'kuhan', 'mtuck'] },
        { projectName: 'US Domestic Terrorism', managedBy: ['mtuck'] },
        { projectName: 'Climate Change and Global Warming', managedBy: ['matt', 'Derek', 'mtuck'] },
        { projectName: 'Football Business and Politics', managedBy: ['KJF', 'mtuck'] },
        { projectName: 'War in Afghanistan', managedBy: ['mtuck'] },
        { projectName: 'Iraq Under US Occupation', managedBy: ['AJB', 'KJF', 'mtuck'] },
        { projectName: 'Events Leading Up to the 2003 Invasion of Iraq', managedBy: ['Derek', 'KJF', 'mtuck'] },
        { projectName: 'Prisoner Abuse in Iraq, Afghanistan and Elsewhere', managedBy: ['Derek', 'KJF', 'mtuck'] },
        { projectName: 'Domestic Propaganda and the News Media', managedBy: ['mtuck'] },
        { projectName: 'US International Relations', managedBy: ['mtuck'] },
        { projectName: 'Neoconservative Influences on US Policies', managedBy: ['mtuck'] },
        { projectName: 'US Confrontation with Iran', managedBy: ['mtuck'] },
        { projectName: '2001 Anthrax Attacks', managedBy: ['Paul', 'KJF', 'paxvector'] },
        { projectName: 'Iran-Contra and Arms-for-Hostages Scandals', managedBy: ['mtuck'] },
        {
            projectName: 'Alleged Use of False Flag Attacks by Intelligence Agencies',
            managedBy: ['matt', 'KJF', 'mtuck'],
        },
        { projectName: 'Nixon, Ford, and Watergate', managedBy: ['mtuck'] },
        { projectName: 'Genetic Engineering and the Privatization of Seeds', managedBy: ['Derek', 'mtuck'] },
        {
            projectName: 'The Struggle for Kosovar Albanian Self-Determination',
            managedBy: ['mtuck', 'michael_pollock'],
        },
        { projectName: 'US Environmental Issues', managedBy: ['Derek', 'mtuck'] },
        { projectName: 'Environmental Impact of the 9/11 Attacks', managedBy: ['Derek', 'paxvector'] },
        { projectName: 'Neoliberalism and Globalization', managedBy: ['AJB', 'mtuck'] },
        { projectName: 'Hurricane Katrina', managedBy: ['mtuck'] },
        { projectName: 'Water Privatization', managedBy: ['Derek'] },
        { projectName: 'History of US Interventions', managedBy: ['Derek', 'mtuck'] },
        { projectName: 'A. Q. Khan`s Nuclear Network', managedBy: ['Paul', 'KJF'] },
        { projectName: '2004 Ousting of Jean-Bertrand Aristide', managedBy: ['mtuck'] },
        { projectName: 'US Military', managedBy: ['matt', 'Derek', 'mtuck'] },
        { projectName: 'Bush administration`s treatment of US troops', managedBy: ['Derek'] },
    ]);

    const useStyles = makeStyles((theme) => ({
        paper: {
            paddingTop: 0,
        },
        headers: {
            // color: theme.palette.secondary.dark,
            backgroundColor: '#AFAFAF',
            height: theme.spacing(6),
            display: 'flex',
            alignItems: 'center',
        },
        headersTextBox: {
            backgroundColor: '#909090',
            width: '100%',
        },
        typography: {
            marginLeft: theme.spacing(1),
        },
    }));

    const classes = useStyles();
    return (
        <React.Fragment>

                <Paper variant='outlined' elevation={3} className={classes.paper}>
                    <Box className={classes.headers}>
                        <Box className={classes.headersTextBox}>
                            <Typography variant='h5' className={classes.typography}>
                                Projects:
                            </Typography>
                        </Box>
                    </Box>
                    <List>
                        {projects.map((project) => (
                            <ListItem button component='a' href='/Timeline'>
                                <ListItemText primary={project.projectName} />
                                <ListItemText secondary={`Managed By: ${project.managedBy}`} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
        </React.Fragment>
    );
};

export default TimelinesIndex;
