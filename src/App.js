import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Info from './components/Info';
import LandingPage from './components/LandingPage/LandingPage';
import Registration from './components/Registration';
import ErrorScreen from './components/ErrorScreen';
import { RootProvider } from './components/context/RootContext';
import Root from './components/root';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/registration" component={Registration}/>
        <Route exact path="/info" component={Info} />
        <Route exact path="/error" component={ErrorScreen} />
        <Route exact path="/root">
          <RootProvider>
            <Root />
          </RootProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
