import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Dashboard, Settings, History } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: theme.spacing(2),
  },
  listItem: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    transition: 'background-color 0.3s ease-in-out', // Added transition effect
    '&:hover': {
      //backgroundColor: '#2C3E50',
    },
  },
  selectedListItem: {
    backgroundColor: '#F5F5F5', // Updated background color
  },
  listItemText: {
    fontSize: '1.2rem',
  },
}));

const NavigationSidebar = () => {
  const location = useLocation();
  const classes = useStyles();
  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: <Dashboard /> },
    { label: 'Connection Management', path: '/connection-management', icon: <Settings /> },
    { label: 'Transaction History', path: '/transaction-history', icon: <History /> },
  ];

  const isSelected = (path) => location.pathname === path;

  return (
    <List className={classes.list}>
      {navItems.map((item, index) => (
        <ListItem
          key={index}
          button
          component={Link}
          to={item.path}
          className={`${classes.listItem} ${isSelected(item.path) ? classes.selectedListItem : ''}`}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary={item.label} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationSidebar;