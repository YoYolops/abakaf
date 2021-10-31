import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Info from './components/Info';
import LandingPage from './components/LandingPage/LandingPage';
import Registration from './components/Registration';
import ErrorScreen from './components/ErrorScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/registration" component={Registration}/>
        <Route exact path="/info" component={Info} />
        <Route exact path="/error" component={ErrorScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
