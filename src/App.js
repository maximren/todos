import React, { PureComponent } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Own from './components/Own';
import Education from './components/Education';
import Work from './components/Work';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

class App extends PureComponent {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <Navbar />
                <Route exact path="todos/" component={Own} />
                <Route path="todos/education" component={Education} />
                <Route path="todos/work" component={Work} />
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
