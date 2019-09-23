import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { signupAction } from '../../actions/auth/signupAction';

class SignupPage extends React.Component {
  
  state = { email: '', password: '', error: '', loading: false }

  handleSignup(event) {
    event.preventDefault();
    const { email, password } = this.state;
     return axios.post('/api/signup', { email, password })
    .then((response) => {
      const user = response.data.userData;
      localStorage.setItem('token', response.data.myToken);
      toastr.success('Welcome,  An email will be sent to you.');
    }).catch(error => toastr.error('An error occurred'));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
 }

  render() {
    const { success } = this.props.signupState;
    return success ? (
      <div>
        <h2>You are registered</h2>
      </div>
    ) : (
      <div>
        <h2>Welcome! Sign up below</h2>
              <Card>
         <input
            label='Email'
            placeholder='user@email.com'
            value={this.state.email}
            name="username"
            onChange={(event) => this.handleChange(event)}
         />    
         <input
            label='Password'
            placeholder='password'
            name="password"
            value={this.state.password}
            onChange={(event) => this.handleChange(event)}
         />

        <button className="btn btn-dark" onClick={e => this.handleSignup(e)}>Sign up</button>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  signupState: state.signupReducer,
  myProps: ownProps
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ signupAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
