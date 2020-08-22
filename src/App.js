import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Authorization from './components/authorization/Authorization';
import { AppContext } from './context/appContext';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home';
import Terminals from './components/terminals/Terminals';
import Buyers from './components/buyers/Buyers';
import Buyer from './components/buyers/Buyer';
import Page404 from './components/Page404';

function App() {
  const { state } = useContext(AppContext);
  console.log(state);
  if (state.isAutoruzationComponentShown)
    return (
      <div className="App">
        <Authorization />
      </div>
    );
  else
    return (
      <div className="App">
        <BrowserRouter>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/terminals' component={Terminals} />
            <Route path='/buyers' exact component={Buyers} />
            <Route path='/buyers/:id' component={Buyer}></Route>
            <Route path="*" component={Page404}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
