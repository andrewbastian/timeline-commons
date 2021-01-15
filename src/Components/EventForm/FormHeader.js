import React from 'react';

import { Box, Typography, Link } from '@material-ui/core/';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '95%',
    margin: 'auto',
    backgroundColor: '#AFAFAF',
    height: 186,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
},
  textBox: {
    height: 120,
    width: '100%',
    backgroundColor: '#707070',
    padding: theme.spacing(2)
  },
  rightContent: {
    height: 120,
    width: '100%',
    backgroundColor: '#707070',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'center'
  },
    extendedIcon: {
    marginRight: theme.spacing(1),
  },
    fab: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2)
  },
}));


const Form = (props) => {
	// const data = props.data
	// const {title, description, creator, date} = data
	const classes = useStyles();
    return (
    <Box className={classes.root}>
    <Box className={classes.textBox}>
      <Typography variant="h5">US Environmental Records</Typography>
      <Typography variant="subtitle1">National Parks</Typography>
      <Typography variant="subtitle2" display="inline"
      >Project:</Typography>
      <Link
      >
      <Typography variant="subtitle2" display="inline" 
      >US Environmental Issues</Typography>
      </Link>
      <br/>
       
    </Box>

      <Box className={classes.rightContent}>
      <Typography variant="subtitle2" 
      >Open-Content project managed by:</Typography>
      <Link 
      >
      <Typography variant="subtitle2" 
      >Derek, mtuck</Typography>
      </Link>
      
    </Box>
    </Box>
    );
};


export default Form;
