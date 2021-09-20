import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './css/comman.css'
import Login from './pages/Login'
import HomePage from './pages/HomePage'


function App() {
  return (
    <>
               
                  <Router>
                      <Switch>
                              <Route exact path="/" component={Login} />
                              <Route exact path="/Home" component={HomePage} />
                      </Switch>
                  </Router>
                
    </>
  );
}

export default App;
