import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Profil from './pages/Profil';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/booking" exact component={Booking} />
          <Route path="/profil" exact component={Profil} />
          <Route path="/contact" exact component={Contact} />
          <Route exact component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;