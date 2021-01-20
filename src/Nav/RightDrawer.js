import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

import {
    AppBar,
    CssBaseline,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    Divider,
    ListItem,
    ListItemText,
    List,
    Button,
    Link,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        marginBottom: theme.spacing(20),
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShiftLeft: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    leftDrawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    leftDrawerPaper: {
        width: drawerWidth,
    },
    leftDrawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    //
    appBarShiftLRight: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    rightDrawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    rightDrawerPaper: {
        width: drawerWidth,
    },
    rightDrawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
    },
    //
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },

    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
}));

export default function RightDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    // const [openLeft, setOpenLeft] = useState(false);
    // const [openRight, setOpenRight] = useState(false);

    const [user, setUser] = useState({ username: 'BlKro' });

    // const handleLeftDrawerOpen = () => {
    //     setOpenLeft(true);
    // };

    // const handleLeftDrawerClose = () => {
    //     setOpenLeft(false);
    // };
    // const handleRightDrawerOpen = () => {
    //     setOpenRight(true);
    // };

    // const handleRightDrawerClose = () => {
    //     setOpenRight(false);
    // };

    return (
        <React.Fragment>
            <Drawer
                className={classes.rightDrawer}
                variant='persistent'
                anchor='right'
                open={props.openRight}
                classes={{
                    paper: classes.rightDrawerPaper,
                }}
            >
                <div className={classes.rightDrawerHeader}>
                    <Typography> Hi {user.username}! </Typography>
                    <IconButton onClick={props.handleRightDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <Button>Guidelines</Button>
                <Button>My Profile</Button>
                <Button>My Entries</Button>
                <Divider />
                <Button variant='contained' color='secondary' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    Logout
                </Button>
            </Drawer>
        </React.Fragment>
    );
}
