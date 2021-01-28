import './App.css';
import TableState from './components/context/TableContext/TableState';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Table from './components/Table/Table'
import Crypto from './components/Crypto/Crypto'
import CryptoState from './components/context/CryptoContext/CryptoState'

const App = () => {

  return (
    <div className="App">
      <TableState>
        <Router>
          <Navbar key='navbar' />
          <Switch>
            <Route exact path='/' component={Table} />
            <Route exact path='/cryptocurrencies' component={Table} />
            <CryptoState>
              <Route exact path='/cryptocurrencies/:CryptoID' component={Crypto} />
            </CryptoState>
          </Switch>
        </Router>
      </TableState>
    </div>
  );
}

export default App;
