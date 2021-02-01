import './App.css';
import TableState from './components/context/TableContext/TableState';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Table from './components/Table/Table'
import Crypto from './components/Crypto/Crypto'
import CryptoState from './components/context/CryptoContext/CryptoState'
import CryptoChartState from './components/context/CryptoContext/CryptoChart Context/CryptoChartState'
import Footer from './components/layout/Footer/Footer'
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
              <CryptoChartState>
                <Route exact path='/cryptocurrencies/:CryptoID' component={Crypto} />
              </CryptoChartState>
            </CryptoState>
          </Switch>
          <Footer />
        </Router>
      </TableState>
    </div>
  );
}

export default App;
