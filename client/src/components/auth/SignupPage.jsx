import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signupAction } from '../../actions/auth/signupAction';

class SignupPage extends React.Component {
  handleSignup(e) {
    e.preventDefault();
    this.props.signupAction();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.signupState.success) {
      console.log('next Props =======>', nextProps.signupState.success);
      console.log('previous Props =======>', this.props.signupState.success);
    }
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
        <button className="btn btn-dark" onClick={e => this.handleSignup(e)}>Sign up</button>
      </div>
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
