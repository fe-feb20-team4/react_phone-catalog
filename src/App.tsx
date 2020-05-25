import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/phones">
          <PhonesPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
