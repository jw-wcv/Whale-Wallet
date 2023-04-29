import React from 'react';
import { Container, Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '90px',
    maxWidth: '1300px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '1.5rem',
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

const Dashboard = () => {

  const classes = useStyles();

  // Dummy balance data for each currency
  const totalBalance = 10000;
  const ethBalance = 2.5;
  const manaBalance = 500;
  const blbrBalance = 1000;
  const galaBalance = 150;


  return (
    <div>
      <Typography variant="h4">Dashboard</Typography>
      <Grid container spacing={3} style={{ marginTop: '24px' }}>
        <Grid item xs={12} md={4}>
          <div className={`${classes.gridItem} ${classes.tile}`}>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Total Balance</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>ETH: {ethBalance}</Typography>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>MANA: {manaBalance}</Typography>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>BLBR: {blbrBalance}</Typography>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>GALA: {galaBalance}</Typography>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginTop: '16px' }}>Total: ${totalBalance}</Typography>
            </div>
            <Typography variant="subtitle1" style={{ marginTop: '8px' }}>Last updated 2 hours ago</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={`${classes.gridItem} ${classes.tile}`}>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Recent Transactions</Typography>
            <ul style={{ marginTop: '16px', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ backgroundColor: '#D6EAF8', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
                  <i className="fas fa-exchange-alt" style={{ color: '#3498DB', fontSize: '20px' }}></i>
                </div>
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Transfer to John Smith</Typography>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ backgroundColor: '#D4EFDF', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
                  <i className="fas fa-shopping-cart" style={{ color: '#27AE60', fontSize: '20px' }}></i>
                </div>
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Purchase on Amazon</Typography>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ backgroundColor: '#FDEDEC', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
                  <i className="fas fa-exclamation-triangle" style={{ color: '#E74C3C', fontSize: '20px' }}></i>
                </div>
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Payment failed</Typography>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={`${classes.gridItem} ${classes.tile}`}>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Rental Progress</Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
              <div style={{ backgroundColor: '#27AE60', width: '12px', height: '12px', borderRadius: '50%', marginRight: '8px' }}></div>
              <Typography variant="subtitle1">Renting NFT #12345</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
              <div style={{ backgroundColor: '#E67E22', width: '12px', height: '12px', borderRadius: '50%', marginRight: '8px' }}></div>
              <Typography variant="subtitle1">Waiting for approval from owner</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
              <div style={{ backgroundColor: '#D6DBDF', width: '12px', height: '12px', borderRadius: '50%', marginRight: '8px' }}></div>
              <Typography variant="subtitle1">Pending payment</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

