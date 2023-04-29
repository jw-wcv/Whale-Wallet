import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavigationSidebar from './components/NavigationSidebar';
import Dashboard from './components/Dashboard';
import ConnectionManagement from './components/ConnectionManagement';
import TransactionHistory from './components/TransactionHistory';
import Footer from './components/Footer';
import { Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Header />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={3}>
              <NavigationSidebar />
            </Grid>
            <Grid item xs={12} md={9}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/connection-management" element={<ConnectionManagement />} />
                <Route path="/transaction-history" element={<TransactionHistory />} />
                <Route path="/" element={<Navigate to="/dashboard" />} />
              </Routes>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </Router>
  );
};


export default App;
