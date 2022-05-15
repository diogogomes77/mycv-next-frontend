import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Nav = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Local Reviews
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
