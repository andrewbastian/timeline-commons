import React,{ useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CatDialogs(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const [topic, setTopic] = React.useState('');

  const handleChange = (event) => {
    setTopic(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {   console.log('props', props)  });
  return (
    <div>
      <Button onClick={handleClickOpen}>{props.category}</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Select a Topic</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
              <Select
                native
                value={topic}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
            <option value={10}>National Parks (11)</option>
            <option value={20}>Public land use (16)</option>
            <option value={20}>Air pollution (51)</option>
            <option value={20}>Water pollution (28)</option>
            <option value={20}>Public health (11)</option>
            <option value={20}>Wetlands (7)</option>
            <option value={20}>Wildlife protection (16)</option>
            <option value={20}>Corruption (25)</option>
            <option value={20}>Forest policy (10)</option>
            <option value={20}>Global warming (61)</option>
            <option value={20}>Corporate welfare (18)</option>
            <option value={20}>Shorelines and oceans (5)</option>
            <option value={20}>Appointments and resignations (13)</option>
            <option value={20}>Endangered species (11)</option>
            <option value={20}>Toxic waste (6)</option>
            <option value={20}>Environmental enforcement (23)</option>
            <option value={20}>Outsourcing and privatization (7)</option>
            <option value={20}>Politicization and deception (92)</option>
            <option value={20}>Superfund sites and clean-up (5)</option>
              </Select>
            </FormControl>

          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}