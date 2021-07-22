import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ReactComponent as SvgSprite } from '../../images/sprite.svg';
import Scan from '../Scan';
import QRcode from '../QRcode';
import Response from '../Response';

import './App.scss';


const App = () => {
  return (
    <div className="App">
    <Router>
        <Switch>

          <Route path="/" exact>
            <Scan />
          </Route>

          <Route path="/response" exact>
            <Response />
          </Route>

          <Route path="/qrCode" exact>
            <QRcode /> 
          </Route>

        </Switch>
      </Router> 
      
      <SvgSprite style={{ display: 'none' }} />
    </div>
  );
}

export default App;
