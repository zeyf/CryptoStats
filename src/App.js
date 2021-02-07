import './App.css';
import TableState from './components/context/TableContext/TableState';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Table from './components/Table/Table'
import Crypto from './components/Crypto/Crypto'
import CryptoState from './components/context/CryptoContext/CryptoState'
import CryptoChartState from './components/context/CryptoContext/CryptoChart Context/CryptoChartState'
import Footer from './components/layout/Footer/Footer'
import NotFound from './components/layout/Not Found/NotFound';

const App = () => {

  return (
    <div className="App">
      <TableState>
        <CryptoState>
          <CryptoChartState>
            <Router>
              <Navbar key='navbar' />
              <Switch>
                <Route exact path='/' component={Table} />
                <Route exact path='/cryptocurrencies' component={Table} />
                <Route exact path='/cryptocurrencies/:CryptoID' component={Crypto} />
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </Router>
          </CryptoChartState>
        </CryptoState>
      </TableState>
    </div>
  );
}

export default App;
