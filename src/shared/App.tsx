import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';

const Home = () => <div>Home</div>;

const Login = () => <div>Login</div>;

const App: React.SFC = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
    <h1>Hello world</h1>
    <p>App!</p>
  </div>
);

export default App;
