import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import NativeSelect from "@material-ui/core/NativeSelect";
import MyCard from './MyCard';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Reservation() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [selectedTime, setSelectedTime] = React.useState(new Date('2014-08-18T21:11:54'));
  const [state, setState] = React.useState({
    res: "",
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleTimeChange = (Time) => {
    setSelectedTime(Time);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div style={{ textAlign: "center" }}>
   
      <h1 style={{ margin: "30px" }}>BOOK YOUR TABLE</h1><div>        
      <form className={classes.root} noValidate autoComplete="off">
       
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Restaurant
        </InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: "Restaurant",
            id: "res-native-label-placeholder"
          }}
        >
          <option aria-label="None" value="" />
          <option value={"delhi"}>Delhi</option>
          <option value={"bhopal"}>Bhopal</option>
          <option value={"pune"}>Pune</option>
          <option value={"dehradun"}>Dehradun</option>
        </NativeSelect>
        <FormHelperText>Select Restaurant</FormHelperText>
      </FormControl>        
      <TextField id="outlined-basic" label="Total Person" type="number" />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Expected Date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Expectet Time"
            value={selectedTime}
            onChange={handleTimeChange}
            KeyboardButtonProps={{
              'aria-label': 'Change Time',
            }}
          />
        </MuiPickersUtilsProvider>
        <Button variant="contained" size="large" color="secondary" onClick={handleClickOpen}>CHECK AVAILABLITY</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Register your detail Here</DialogTitle>
          <DialogContent>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Mobile number"
              type="tel"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
          </Button>
            <Button onClick={handleClose} color="primary">
              Register
          </Button>
          </DialogActions>
        </Dialog>
      </form>
      </div>
      <MyCard/>
      
    </div>
  );
}
