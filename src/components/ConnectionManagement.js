import React from 'react';
import { Container, Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '90px', // adjust the top margin to match Metamask
    maxWidth: '1300px', // adjust the maximum width to match Metamask
    margin: '0 auto',
  },
  heading: {
    fontSize: '1.5rem', // adjust the font size to match Metamask
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  tile: {
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
  },
}));

const ConnectionManagement = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4">Connection Management</Typography>
      <Grid container spacing={3} style={{ marginTop: '24px' }}>
        <Grid item xs={12} sm={6}>
        <div className={`${classes.gridItem} ${classes.tile}`}>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Approved Networks</Typography>
            <ul style={{ marginTop: '16px', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ backgroundColor: '#F1C40F', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
                  <i className="fab fa-ethereum" style={{ color: '#fff', fontSize: '20px' }}></i>
                </div>
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Ethereum Network</Typography>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ backgroundColor: '#5F5F5F', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
                  <i className="fas fa-globe" style={{ color: '#fff', fontSize: '20px' }}></i>
                </div>
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Cosmos Ecosystem</Typography>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ backgroundColor: '#0077B5', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
                  <i className="fab fa-linkedin-in" style={{ color: '#fff', fontSize: '20px' }}></i>
                </div>
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Binance Smart Chain</Typography>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div className={`${classes.gridItem} ${classes.tile}`}>
    <Typography variant="h6" style={{ fontWeight: 'bold' }}>Connected Network Status</Typography>
    <div style={{ marginTop: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ backgroundColor: '#2ECC71', borderRadius: '50%', width: '12px', height: '12px', marginRight: '8px' }}></div>
        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Ethereum Mainnet Connected</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ backgroundColor: '#D6DBDF', borderRadius: '50%', width: '12px', height: '12px', marginRight: '8px' }}></div>
        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Cosmos Network Disconnected</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ backgroundColor: '#D6DBDF', borderRadius: '50%', width: '12px', height: '12px', marginRight: '8px' }}></div>
        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Matic Network Disconnected</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ backgroundColor: '#D6DBDF', borderRadius: '50%', width: '12px', height: '12px', marginRight: '8px' }}></div>
        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>BSC Network Disconnected</Typography>
      </div>
    </div>
  </div>
</Grid>

      </Grid>
    </div>
  );
};

export default ConnectionManagement;
