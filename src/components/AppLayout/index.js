import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar } from 'components/AppLayout/AppBar';
import { Drawer } from 'components/AppLayout/Drawer';
import { useStyles } from 'components/AppLayout/styles';

export const AppLayout = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};
