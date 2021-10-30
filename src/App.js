import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Info from './components/Info';
import LandingPage from './components/LandingPage/LandingPage';
import Registration from './components/Registration';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/registration" component={Registration}/>
        <Route exact path="/info" component={Info} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
