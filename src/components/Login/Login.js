import React , { useState }from 'react';
import './Login.css' ; 
import Swal from 'sweetalert2';

const Login = ({ setIsAuthenticated }) => {

    const adminEmail = 'admin@gmail.com';
    const adminPassword = 'admin';
  
    const [email, setEmail] = useState('admin@gmail.com');
    const [password, setPassword] = useState('admin');
    const handleLogin = e => {
        e.preventDefault();
    
        if (email === adminEmail && password === adminPassword) {
          Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              localStorage.setItem('is_authenticated', true);
              setIsAuthenticated(true);
    
              Swal.fire({
                icon: 'success',
                title: 'Successfully logged in!',
                showConfirmButton: false,
                timer: 1500,
              });
            },
          });
        } else {
          Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Incorrect email or password.',
                showConfirmButton: true,
              });
            },
          });
        }
      };
    

    return (
        <div>
            <div id="bg"></div>

            <form onSubmit={handleLogin}>
                <div className="login-field">
                    <input  id="email" type="email" placeholder="admin@gmail.com" value={email} onChange={e=>setEmail(e.target.value)} /> 
                </div>

                <div className="login-field">
                    <input type="password" placeholder="admin" value={password} onChange={e=>setEmail(e.target.value)}/>    
               </div>

                <div className="login-field">
                    <button className="btn" type="submit" value="Login">Log in</button>
                </div>
            </form>
        </div>
    );
}
export default Login;