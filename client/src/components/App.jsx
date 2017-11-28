// This component is used to bootstrap all components in the application
import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import SignupPage from './auth/SignupPage';

const App = () => (
  <div>
    <h2>The React App works</h2>
    <p>
      <Link to="/home">
        Home
      </Link> |
      <Link to="/dashboard">
        Dashboard
      </Link> |
      <Link to="/signup">
        Signup
      </Link>
    </p>
    <Route exact path="/signup/" component={SignupPage}/>
    <Route exact path="/home" component={Home}/>
    <PrivateRoute exact path="/dashboard" component={Dashboard}/>
  </div>
);

const Home = () => (
  <div>
    <h2>The App would be built with React Router 4!</h2>
  </div>
);
const Dashboard = props => (
    <div>
      <h2>This App would be built with Bootstrap 4!</h2>
      <p>Programmer Id: {props.userId}</p>
    </div>
);

// Define a private route for later use. (i.e for Private components)
// Though we will be abstracting this to another file later
const PrivateRoute = ({ component: Component, ...rest }) => {
  const extraProps = { auth: true, userId: 5 };
  return extraProps.auth ? (
    <Route {...rest} render={props => (
      <Component {...extraProps} {...props}/>
    )}/>
  ) : <Redirect to="/home"/>;
};
export default App;
