import './App.css';
import TableState from './components/context/TableContext/TableState';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Table from './components/Table/Table'

const App = () => {

  return (
    <div className="App">
      <TableState>
        <Router>
          <Navbar key='navbar' />
          <Switch>
            <Route exact path='/' component={Table} />
            <Route exact path='/cryptocurrencies' component={Table} />
            <Route exact path='/cryptocurrencies/:cryptoname' component={Crypto} />
          </Switch>
        </Router>
      </TableState>
    </div>
  );
}

export default App;
