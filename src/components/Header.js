import React from 'react';
import {
AppBar,
Toolbar,
Typography,
Button,
Menu,
MenuItem,
makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#2C3E50',
    height: '60px', // adjust the height to match Metamask
  },
  logo: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    maxWidth: '220px', // adjust the maximum width to match Metamask
  },
  logoText: {
    fontWeight: 'bold',
    letterSpacing: '1px',
    marginLeft: theme.spacing(1),
    fontSize: '1rem', // adjust the font size to match Metamask
  },
  logoImg: {
    height: '35px',
    marginRight: theme.spacing(1),
  },
  connectedPlatform: {
    marginRight: theme.spacing(2),
    color: '#E67E22',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    lineHeight: '1.6rem', // adjust the line height to match Metamask
  },
  settingsButton: {
    backgroundColor: '#27AE60',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1E8449',
    },
    height: '40px', // adjust the height to match Metamask
    fontSize: '1.1rem', // adjust the font size to match Metamask
  }
}));


const Header = () => {
const classes = useStyles();
const [anchorEl, setAnchorEl] = React.useState(null);

const handleClick = (event) => {
setAnchorEl(event.currentTarget);
};

const handleClose = () => {
setAnchorEl(null);
};

return (
<AppBar position="static" className={classes.header}>
<Toolbar>
<div className={classes.logo}>
<img src="/favicon.png" alt="Whale Logo" className={classes.logoImg} />
<Typography variant="h6" className={classes.logoText}>
Whale Wallet
</Typography>
</div>
<Typography variant="subtitle1" className={classes.connectedPlatform}>
Connected Platform: Ethereum
</Typography>
<Button
       variant="contained"
       className={classes.settingsButton}
       onClick={handleClick}
     >
Settings
</Button>
<Menu
       anchorEl={anchorEl}
       keepMounted
       open={Boolean(anchorEl)}
       onClose={handleClose}
     >
<MenuItem onClick={handleClose}>Profile</MenuItem>
<MenuItem onClick={handleClose}>Support</MenuItem>
<MenuItem onClick={handleClose}>About</MenuItem>
</Menu>
</Toolbar>
</AppBar>
);
};

export default Header;