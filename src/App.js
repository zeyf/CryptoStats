import './App.css';
import {useState} from 'react'
import TableState from './components/context/TableContext/TableState';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Table from './components/Table/Table'
import Crypto from './components/Crypto/Crypto'
import CryptoState from './components/context/CryptoContext/CryptoState'
import CryptoChartState from './components/context/CryptoContext/CryptoChart Context/CryptoChartState'
import Footer from './components/layout/Footer/Footer'
import NotFound from './components/layout/Not Found/NotFound';
import About from './components/About/About';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const ChangeStyle = (type) => {
    if (darkMode && type === 'BGandColor') return {backgroundColor: '#252525', color: 'white'}
  }

  return (
    <body style={ChangeStyle()}>
    <div className="App">
      <TableState>
        <CryptoState>
          <CryptoChartState>
            <Router>
              <Navbar key='navbar' darkMode={darkMode} setDarkMode={setDarkMode} 
              ChangeStyle={ChangeStyle} />
              <Switch>
                <Route exact path='/' component={Table} />
                <Route exact path='/cryptocurrencies' component={Table} />
                <Route exact path='/cryptocurrencies/:CryptoID' component={Crypto} />
                <Route exact path='/aboutus' component={About} />
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </Router>
          </CryptoChartState>
        </CryptoState>
      </TableState>
    </div>
    </body>
  );
}

export default App;
