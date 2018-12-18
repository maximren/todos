import React, { PureComponent } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Own from './components/Own';
import Education from './components/Education';
import Work from './components/Work';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({
  basename: process.env.PUBLIC_URL,
});

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Own} />
              <Route path="/education" component={Education} />
              <Route path="/work" component={Work} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
