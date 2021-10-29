import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Registration from './components/Registration';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/registration" component={Registration}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
