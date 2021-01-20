import React, { useState, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../App';
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

import CatDialogs from '../Nav/CatDialogs';
import RightDrawer from '../Nav/RightDrawer';
import Login from './Login';

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

export default function TopBar() {
    const { state } = useContext(AuthContext);
    const classes = useStyles();
    const theme = useTheme();
    const [openLeft, setOpenLeft] = useState(false);
    const [openRight, setOpenRight] = useState(false);
    const categories = ['Projects', 'Topics', 'Regions'];

    const handleLeftDrawerOpen = () => {
        setOpenLeft(true);
    };

    const handleLeftDrawerClose = () => {
        setOpenLeft(false);
    };
    const handleRightDrawerOpen = () => {
        setOpenRight(true);
    };

    const handleRightDrawerClose = () => {
        setOpenRight(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position='fixed'
                className={clsx(classes.appBar, {
                    [classes.appBarShiftLeft]: openLeft,
                    [classes.appBarShiftRight]: openRight,
                })}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick={handleLeftDrawerOpen}
                        edge='start'
                        className={clsx(classes.menuButton, openLeft && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography className={classes.title} variant='h5' noWrap>
                        <Link component={RouterLink} to='/' style={{ color: 'black' }}>
                            History Commons
                        </Link>
                    </Typography>

                    <IconButton aria-label='search' color='inherit'>
                        <SearchIcon />
                    </IconButton>
{  !state.isAuthenticated ? (
                <Login />
            ) : (                  <IconButton
                        aria-label='display more actions'
                        edge='end'
                        color='inherit'
                        onClick={handleRightDrawerOpen}
                        className={clsx(classes.menuButton, openRight && classes.hide)}
                    >
                        <MoreIcon />
                    </IconButton>)}
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.leftDrawer}
                variant='persistent'
                anchor='left'
                open={openLeft}
                classes={{
                    paper: classes.leftDrawerPaper,
                }}
            >
                <div className={classes.leftDrawerHeader}>
                    <IconButton onClick={handleLeftDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['About', 'Timelines', 'Blog', 'Donate'].map((text, index) => (
                        <ListItem button key={text}>
                            <Link component={RouterLink} to={`/${text.toLowerCase()}`} style={{ color: 'black' }}>
                                <ListItemText primary={text} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {categories.map((category) => (
                        <ListItem component={CatDialogs} category={category}></ListItem>
                    ))}
                </List>
            </Drawer>
            {/*Right Drawer*/}
            {!state.isAuthenticated ? (
                <Login />
            ) : (
                <RightDrawer openRight={openRight} handleRightDrawerClose={handleRightDrawerClose} />
            )}
        </div>
    );
}
