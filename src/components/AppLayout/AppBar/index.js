import React from 'react';
import AppBarMUI from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { APP_NAME } from 'globalStrings';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { AccountCircle } from '@material-ui/icons';
import { ChangeThemeButton } from 'components/AppLayout/AppBar/ChangeThemeButton';
import { AuthWavesKeeperButton } from 'containers/AuthWavesKeeperButton';
import { useStyles } from 'components/AppLayout/AppBar/styles';

export const AppBar = ({ open, handleDrawerOpen, IsAuthorized }) => {
  const classes = useStyles();
  return (
    <AppBarMUI
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="overline">
          {APP_NAME}
        </Typography>
        <div className={classes.grow} />
        {IsAuthorized && (
          <IconButton color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        )}
        <ChangeThemeButton />
        {IsAuthorized && (
          <IconButton
            edge="end"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        )}
        <AuthWavesKeeperButton />
      </Toolbar>
    </AppBarMUI>
  );
};
