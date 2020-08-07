import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Chekout from './Chekout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function App() {
  const [{ user }, dispatch] = useStateValue();

  React.useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //user loggout
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return () => {
      unSubscribe();
    }
  }, []);
  console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Chekout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
