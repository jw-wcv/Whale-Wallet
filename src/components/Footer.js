import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#EAECEE',
    padding: theme.spacing(2),
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '50px',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container>
        <div className={classes.footerContent}>
          <Typography variant="body1">
            <a href="/terms">Terms and Conditions</a> | <a href="/privacy">Privacy Policy</a> |{' '}
            <a href="/help">Help and Support</a>
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
