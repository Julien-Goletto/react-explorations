import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Liste from './Pages/Liste/Liste';
import Scroll from './Pages/Scroll/Scroll';
import StateAnim from './Pages/StateAnim/StateAnim';
function App() {
  return (
      <Router>
        <div className="global-container">
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Liste} />
            <Route path="/stateAnim" exact component={StateAnim} />
            <Route path="/scroll" exact component={Scroll} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
