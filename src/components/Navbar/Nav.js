import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HomeIcon from '@material-ui/icons/Home';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import InfoIcon from '@material-ui/icons/Info';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),

  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));


export default function Nav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    right: false,
  });


// side bar///////////////////


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button component={ Link } to = "/"><ListItemIcon><HomeIcon /></ListItemIcon> <ListItemText  primary="Home" /></ListItem>
        <ListItem button component={ Link } to = "/Reservation"><ListItemIcon><ImageSearchIcon/></ListItemIcon><ListItemText primary="Reservation" /></ListItem>
        <ListItem button component={ Link } to = "/Restaurant"><ListItemIcon><RestaurantIcon/></ListItemIcon><ListItemText primary="Restaurant" /></ListItem>
        <ListItem button component={ Link } to = "/About"><ListItemIcon><InfoIcon/></ListItemIcon><ListItemText primary="About Us" /></ListItem>
        <ListItem button component={ Link } to = "/Contact"><ListItemIcon><RecentActorsIcon/></ListItemIcon><ListItemText primary="Contact us" /></ListItem>
      </List>     
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="primary">  
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
        ALBIS
          </Typography>
        <Hidden only={['sm', 'xs']}>
         
          <Button color="inherit" component={ Link } to = "/">Home</Button>
          <Button color="inherit" component={ Link } to = "/Restaurant">Restaurant</Button>
          <Button color="inherit" component={ Link } to = "/Reservation">Reservation</Button>
          <Button color="inherit" component={ Link } to = "/About">About Us</Button>
          <Button color="inherit" component={ Link } to = "/Contact">Contact Us</Button>
          </Hidden>
          <Hidden only={['md', 'lg']}><div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon /></IconButton> 
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div></Hidden>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
