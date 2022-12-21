import react from 'react';
import './LoginForm.css';

const LoginForm = (props) => {
  return (
    <div>
      <h1>LoginForm</h1>
      <p>Username: {props.username}</p>
      <p>Password: {props.password}</p>
    </div>
  );
}
export default LoginForm;
